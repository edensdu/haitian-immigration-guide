import React, { useState } from 'react'
import './CostEstimator.css'

const costData = {
  justArrived: {
    en: {
      applicationFee: 575,
      biometricsFee: 85,
      attorneyFee: 1500,
      description: 'Asylum or TPS application'
    },
    ht: {
      applicationFee: 575,
      biometricsFee: 85,
      attorneyFee: 1500,
      description: 'Aplikasyon azil oswa TPS'
    }
  },
  tourist: {
    en: {
      applicationFee: 370,
      biometricsFee: 85,
      attorneyFee: 800,
      description: 'Status change application'
    },
    ht: {
      applicationFee: 370,
      biometricsFee: 85,
      attorneyFee: 800,
      description: 'Aplikasyon chanje estati'
    }
  },
  student: {
    en: {
      applicationFee: 410,
      biometricsFee: 85,
      attorneyFee: 1000,
      description: 'OPT or work visa application'
    },
    ht: {
      applicationFee: 410,
      biometricsFee: 85,
      attorneyFee: 1000,
      description: 'Aplikasyon OPT oswa viza travay'
    }
  },
  work: {
    en: {
      applicationFee: 700,
      biometricsFee: 85,
      attorneyFee: 2000,
      description: 'Green card application (employment-based)'
    },
    ht: {
      applicationFee: 700,
      biometricsFee: 85,
      attorneyFee: 2000,
      description: 'Aplikasyon kat vèt (ki baze sou anplwayman)'
    }
  },
  tps: {
    en: {
      applicationFee: 50,
      biometricsFee: 85,
      attorneyFee: 500,
      description: 'TPS renewal'
    },
    ht: {
      applicationFee: 50,
      biometricsFee: 85,
      attorneyFee: 500,
      description: 'Renouvleman TPS'
    }
  },
  asylum: {
    en: {
      applicationFee: 100,
      biometricsFee: 85,
      attorneyFee: 2000,
      description: 'Asylum application (new $100 fee as of 2025)'
    },
    ht: {
      applicationFee: 100,
      biometricsFee: 85,
      attorneyFee: 2000,
      description: 'Aplikasyon azil (nouvo frè $100 depi 2025)'
    }
  },
  greenCard: {
    en: {
      applicationFee: 760,
      biometricsFee: 85,
      attorneyFee: 1500,
      description: 'Citizenship application (N-400)'
    },
    ht: {
      applicationFee: 760,
      biometricsFee: 85,
      attorneyFee: 1500,
      description: 'Aplikasyon sitwayènte (N-400)'
    }
  },
  other: {
    en: {
      applicationFee: 500,
      biometricsFee: 85,
      attorneyFee: 1500,
      description: 'General application'
    },
    ht: {
      applicationFee: 500,
      biometricsFee: 85,
      attorneyFee: 1500,
      description: 'Aplikasyon jeneral'
    }
  }
}

function CostEstimator({ status, language, t }) {
  const data = costData[status]?.[language] || costData[status]?.en || costData.other.en
  const [includeAttorney, setIncludeAttorney] = useState(false)

  const total = data.applicationFee + data.biometricsFee + (includeAttorney ? data.attorneyFee : 0)

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  return (
    <div className="cost-estimator">
      <h2>{t('costEstimator')}</h2>
      <p className="cost-desc">{t('costEstimatorDesc')}</p>
      <p className="cost-note">{data.description}</p>

      <div className="cost-breakdown">
        <div className="cost-item">
          <span className="cost-label">{t('applicationFee')}</span>
          <span className="cost-value">{formatCurrency(data.applicationFee)}</span>
        </div>
        <div className="cost-item">
          <span className="cost-label">{t('biometricsFee')}</span>
          <span className="cost-value">{formatCurrency(data.biometricsFee)}</span>
        </div>
        <div className="cost-item optional">
          <div className="cost-option">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={includeAttorney}
                onChange={(e) => setIncludeAttorney(e.target.checked)}
                className="cost-checkbox"
              />
              <span>{t('attorneyFee')}</span>
            </label>
          </div>
          <span className="cost-value">{formatCurrency(data.attorneyFee)}</span>
        </div>
        <div className="cost-total">
          <span className="total-label">{t('totalEstimated')}</span>
          <span className="total-value">{formatCurrency(total)}</span>
        </div>
      </div>

      <div className="cost-disclaimer">
        <p>ℹ️ {t('note')}</p>
      </div>
    </div>
  )
}

export default CostEstimator

