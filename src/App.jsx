import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Hero from "./components/Hero";
import { NumberInput, Select, TextInput } from "@mantine/core";
import data from "./data/data";
import toast from "react-hot-toast";

const App = () => {
  const [interestRate, setInterestRate] = useState();
  const [loanTenure, setLoanTenure] = useState();
  const [loanAmount, setLoanAmount] = useState();

  const loanAmountInput = loanAmount;
  const interestRateInput = interestRate;
  const loanTenureInput = loanTenure;

  const [myChart, setMyChart] = useState(null);

  useEffect(() => {
    const ctx = document.getElementById("myChart");
    if (myChart) {
      myChart.destroy(); // Destroy existing chart instance
    }
    const chartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Total Interest", "Principal Loan Amount"],
        datasets: [
          {
            data: [0, 0],
            backgroundColor: ["#0d9488", "#f0fdfa"],
            borderWidth: 0,
          },
        ],
      },
      // options: {
      //   cutout: 70,
      // },
    });
    setMyChart(chartInstance);
    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Clean up on component unmount
      }
    };
  }, []);

  const checkValues = () => {
    if (!interestRate) {
      alert("please enter the interest rate");
      return;
    }
    if (!loanTenure) {
      alert("please enter the loan tenure");
      return;
    }
  };

  const refreshInputValues = () => {
    checkValues();
  };

  const [emi, setEmi] = useState(0);
  const [interest, setInterest] = useState(0);
  const [amount, setAmount] = useState(0);

  const updateData = (emi) => {
    const totalAmount = Math.round(loanTenure * emi);
    const totalInterestPayable = Math.round(totalAmount - loan_amount);

    setEmi(emi);
    setInterest(totalInterestPayable);
    setAmount(totalAmount);

    if (myChart) {
      myChart.data.datasets[0].data[0] = totalInterestPayable;
      myChart.data.datasets[0].data[1] = loan_amount;
      myChart.update();
    }
  };
  const [result, setResult] = useState(false);

  console.log(result);

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState();
  const [loan_amount, setloanAmount] = useState();
  const [downpayment, setDownPayment] = useState("");
  const [modelData, setModelData] = useState([]);
  const [error, setError] = useState("");
  const calculateEMI = () => {
    // refreshInputValues();
    const interest = interestRate / 12 / 100;
    const emi =
      loan_amount *
      interest *
      (Math.pow(1 + interest, loanTenure) /
        (Math.pow(1 + interest, loanTenure) - 1));
    return Math.round(emi);
  };
  const handleCalculate = () => {
    if (!brand) {
      toast.error("please select the brand");
      return;
    }
    if (!model) {
      toast.error("please select the model");
      return;
    }
    if (!interestRate) {
      toast.error("please enter the interest rate");
      return;
    }
    if (!loanTenure) {
      toast.error("please enter the loan tenure");
      return;
    }
    const emi = calculateEMI();
    updateData(emi);
    setResult(true);
  };
  useEffect(() => {
    setModelData([]);
    setModel(null);
    setPrice("");
    setloanAmount("");
    const branddata = data.find((item) => item.company === brand);
    setModelData(branddata?.models);
  }, [brand]);

  useEffect(() => {
    setPrice("");
    setloanAmount("");
    const model_data = modelData?.find((item) => item.model_name === model);

    const price = model_data?.price;
    console.log("price", price);
    setPrice(price);
    setloanAmount(price);
  }, [model]);

  return (
    <>
      <Header />
      <Hero />
      <div className="loan-calculator" id="emi">
        <div className="top w-full">
          <h2 className="font-bold text-3xl">EMI Calculator</h2>
          <div className="flex flex-col lg:flex-row md:flex-row lg:items-center md:items-center lg:justify-between md:justify-between">
            <Select
              label="Select Brand"
              placeholder="Choose a Car Brand"
              data={data.map((item) => item.company)}
              value={brand}
              onChange={setBrand}
            />
            <Select
              label="Select Model"
              placeholder="Choose a Car Brand"
              data={modelData?.map((item) => item.model_name)}
              value={model}
              onChange={setModel}
            />
            <TextInput label="Price" value={price} disabled />
          </div>
          <div className="mt-6 flex flex-col lg:flex-row md:flex-row lg:items-center md:items-center lg:justify-between md:justify-between">
            <NumberInput
              label="Down Payment"
              hideControls
              value={downpayment}
              error={error}
              onChange={(v) => {
                if (Number(price) < v) {
                  setError("can't be greater than price");
                  setloanAmount("");
                  return;
                } else {
                  setError("");
                }
                if (parseInt(v) < 0) {
                  setError("can't be less than 0");
                  setloanAmount("");
                  return;
                } else {
                  setError("");
                }
                setDownPayment(v);
                if (!v) {
                  setloanAmount(price);
                } else {
                  setloanAmount(parseInt(price) - parseInt(v));
                }
              }}
            />
            <TextInput label="Loan Amount" value={loan_amount} disabled />
            <NumberInput
              hideControls
              label="Rate of interest (p.a)"
              value={interestRate}
              onChange={setInterestRate}
            />
          </div>
          <div className="mt-6  flex gap-8 items-end">
            <NumberInput
              hideControls
              label="Loan tenure (in months)"
              value={loanTenure}
              onChange={setLoanTenure}
            />
            <button onClick={handleCalculate} className="calculate-btn">
              Calculate
            </button>
          </div>
        </div>

        <div className="result w-full mt-12">
          <div className="left">
            <div className="loan-emi">
              <h3>Monthly EMI</h3>
              <div className="value">{emi}</div>
            </div>
            <div className="total-interest">
              <h3>Total interest</h3>
              <div className="value">{interest}</div>
            </div>
            <div className="total-amount">
              <h3>Total amount</h3>
              <div className="value">{amount}</div>
            </div>
          </div>
          <div className="right">
            <canvas id="myChart" width="400" height="400"></canvas>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </>
  );
};

export default App;
