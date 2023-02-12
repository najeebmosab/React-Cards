import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ExpenseItem from './Components/ExpenseItem'

function App() {
  const data = [
    {
      Title: "First Title",
      Description: "First Description",
      Price: 10,
      Date: new Date()
    },
    {
      Title: "Second Title",
      Description: "Second Description",
      Price: 20,
      Date: new Date()
    }
  ];
  return (

    <>
      <main>
        <ExpenseItem
          Title={data[0].Title}
          Description={data[0].Description}
          Price={data[0].Price}
          Date={data[0].Date}
        />

        <ExpenseItem
          Title={data[1].Title}
          Description={data[1].Description}
          Price={data[1].Price}
          Date={data[1].Date}
        />
      </main>
    </>
  )
}

export default App
