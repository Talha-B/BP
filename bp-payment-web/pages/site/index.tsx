import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { SetStateAction, useCallback, useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'
import { FinishResponse, PaymentReceipt } from '../types/finishResponse';

export async function getServerSideProps(context: any): Promise<{ props: { data: any; }; }> {
  // Fetch data from external API
  let longitude = context.query.longitude;
  let latitude = context.query.latitude;

  const res = await fetch(`http://localhost:5164/Payment/FindSite?longitude=${longitude}&latitude=${latitude}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default function Home(props: any): JSX.Element {
  const [siteId, setSiteId] = useState(props.data.siteId);
  const [showPumpSelection, setShowPumpSelection] = useState(true);
  const [pumpNumber, setPumpNumber] = useState(1);
  const [fuelType, setFuelType] = useState('unleaded');
  const [cardNumber, setCardNumber] = useState('');
  const [amount, setAmount] = useState(0);
  const [paymentId, setPaymentId] = useState('');
  const [unlockedSuccessfully, setUnlockedSuccessfully] = useState(false);
  const [receiptData, setReceiptData] = useState<PaymentReceipt>();

  const [showPumpUnlocked, setShowPumpUnlocked] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);  

  useEffect(() => {
    if (unlockedSuccessfully) {
      setShowPumpSelection(false)
      setShowPumpUnlocked(true);  
    }
  }, [unlockedSuccessfully]);

  useEffect(() => {
    if (receiptData != undefined) {
      setShowPumpUnlocked(false);
      setShowReceipt(true);
    }
  }, [receiptData]);


  const pumpSelectionHandler = async (e) => {

    if (cardNumber.length < 8){
      alert("card number length not right, min 8 chars")
      return;
    }
    
    if (amount <= 0){
      alert("Invalid amount")
      return;
    }

    const res = await fetch('api/payment', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        siteId: siteId, 
        fuelType: fuelType,
        amount: amount, 
        cardDetails: cardNumber, 
        pumpNumber: pumpNumber  
      })
    });

    const data = await res.json()

    setPaymentId(data.paymentId);
      
    const unlockResponse = await fetch('api/unlock', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        paymentId: data.paymentId, 
      })
    });

    const unlockData = await unlockResponse.json()

    if (unlockData.success){
      setUnlockedSuccessfully(true);
    }
  };

  const completeTransactionHandler = async (e) => {
    const res = await fetch('api/finish', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        paymentId: paymentId, 
      })
    });

    const finishTransactionResponse = await res.json() as FinishResponse

    if (finishTransactionResponse.success){
      setReceiptData(finishTransactionResponse.receipt);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>BP Payment</title>
        <meta name="description" content="BP Payment app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {showPumpSelection &&
        <main className={styles.main}>
          <h1>
            Site details
          </h1>
          <p>{props.data.location}</p>
          <strong>Select pump</strong>
          <p>
            <select name="pumpNumber"
              value={pumpNumber}
              onChange={e => setPumpNumber(e.target.value)}>
              {props.data.pumps.filter(status => status != "Locked").map(({ number, status }: any) => {
                return <option key={number} value={number}>{`${number} ${status}`}</option>
              })}
            </select>
          </p>
          <strong>Select fuel type</strong>
          <p>
            <select name="fuelType"
              value={fuelType}
              onChange={e => setFuelType(e.target.value)}
            >
              <option value="unleaded">Unleaded {props.data.currentPrices.Unleaded}p</option>
              <option value="diesel">Diesel {props.data.currentPrices.Diesel}p</option>
              <option value="ultimateUnleaded">Ultimate Unleaded {props.data.currentPrices.UltimateUnleaded}p</option>
              <option value="ultimateDiesel">Ultimate Diesel {props.data.currentPrices.UltimateDiesel}p</option>
            </select>
          </p>
          <strong>Enter amount</strong>
          <p>
            <input
              type="text"
              name="amount"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </p>

          <strong>Enter card number</strong>
          <p>
            <input
              type="text"
              name="cardNumber"
              value={cardNumber}
              onChange={e => setCardNumber(e.target.value)}
            />
          </p>

          <button onClick={pumpSelectionHandler}>Continue</button>
        </main>
      }

      {showPumpUnlocked &&
        <main className={styles.main}>
          <h1>
            Pump unlocked...
          </h1>
          <p>{props.data.location}</p>
          <p><strong>Click finish once you have done fuelling your vehicle</strong></p>

          <button onClick={completeTransactionHandler}>Finish pumping</button>
        </main>
      }

      {showReceipt && receiptData && 
        <main className={styles.main}>
          <h1>
            Receipt
          </h1>
            <p><strong>Location:</strong> {receiptData.location}</p>
            <p><strong>PumpNumber:</strong> {receiptData.pumpNumber}</p>
            <p><strong>FuelType:</strong> {receiptData.fuelType}</p>
            <p><strong>PricePerLitre:</strong> {receiptData.pricePerLitre}</p>
            <p><strong>LitresFuelled:</strong> {receiptData.litresFuelled}</p>
            <p><strong>TotalAmount:</strong> {receiptData.totalAmount}</p>
            <p><strong>PaymentTransactionId:</strong> {receiptData.paymentTransactionId}</p>
            <p><strong>Last4DigitsOfPaymentCard:</strong> {receiptData.last4DigitsOfPaymentCard}</p>
            <p><strong>Date:</strong> {receiptData.date}</p>
        </main>
      }
    </div>
  )
}
function PaymentReceipt(PaymentReceipt: any): [any, any] {
  throw new Error('Function not implemented.');
}

