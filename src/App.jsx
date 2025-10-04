import { useState } from 'react'
import CustomerForm from './components/CustomerForm'
import BloodReportForm from './components/BloodReportForm'
import ReportPreview from './components/ReportPreview'
import './App.css'

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [customerData, setCustomerData] = useState(null)
  const [reportData, setReportData] = useState(null)

  const handleCustomerSubmit = (data) => {
    setCustomerData(data)
    setCurrentStep(2)
  }

  const handleReportSubmit = (data) => {
    setReportData(data)
    setCurrentStep(3)
  }

  const handleReset = () => {
    setCurrentStep(1)
    setCustomerData(null)
    setReportData(null)
  }

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1)
    } else if (currentStep === 3) {
      setCurrentStep(2)
    }
  }

  return (
    <div className="app">
      <header className="app-header no-print">
        <div className="header-content">
          <h1>🏥 Jayavel Clinical Laboratory</h1>
          <p>Blood Report Management System</p>
        </div>
      </header>

      <main className="app-main">
        <div className="progress-bar no-print">
          <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-label">Customer Details</div>
          </div>
          <div className={`progress-line ${currentStep >= 2 ? 'active' : ''}`}></div>
          <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">Blood Test Results</div>
          </div>
          <div className={`progress-line ${currentStep >= 3 ? 'active' : ''}`}></div>
          <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-label">Report Preview</div>
          </div>
        </div>

        <div className="content-area">
          {currentStep === 1 && (
            <CustomerForm
              onSubmit={handleCustomerSubmit}
              initialData={customerData}
            />
          )}

          {currentStep === 2 && (
            <BloodReportForm
              onSubmit={handleReportSubmit}
              onBack={handleBack}
              initialData={reportData}
              customerName={customerData?.name}
            />
          )}

          {currentStep === 3 && (
            <ReportPreview
              customerData={customerData}
              reportData={reportData}
              onBack={handleBack}
              onReset={handleReset}
            />
          )}
        </div>
      </main>
    </div>
  )
}

export default App
