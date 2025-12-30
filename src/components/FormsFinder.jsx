import React from 'react'
import './FormsFinder.css'

const formsByStatus = {
  justArrived: [
    { number: 'I-589', name: 'Application for Asylum', url: 'https://www.uscis.gov/i-589' },
    { number: 'I-821', name: 'Application for Temporary Protected Status', url: 'https://www.uscis.gov/i-821' },
    { number: 'I-765', name: 'Application for Employment Authorization', url: 'https://www.uscis.gov/i-765' }
  ],
  tourist: [
    { number: 'I-539', name: 'Application to Extend/Change Nonimmigrant Status', url: 'https://www.uscis.gov/i-539' },
    { number: 'I-765', name: 'Application for Employment Authorization', url: 'https://www.uscis.gov/i-765' }
  ],
  student: [
    { number: 'I-20', name: 'Certificate of Eligibility for Nonimmigrant Student Status', url: 'https://studyinthestates.dhs.gov/students/prepare/students-and-the-form-i-20' },
    { number: 'I-765', name: 'Application for Employment Authorization (OPT)', url: 'https://www.uscis.gov/i-765' },
    { number: 'I-140', name: 'Immigrant Petition for Alien Worker', url: 'https://www.uscis.gov/i-140' }
  ],
  work: [
    { number: 'I-129', name: 'Petition for a Nonimmigrant Worker', url: 'https://www.uscis.gov/i-129' },
    { number: 'I-140', name: 'Immigrant Petition for Alien Worker', url: 'https://www.uscis.gov/i-140' },
    { number: 'I-485', name: 'Application to Register Permanent Residence', url: 'https://www.uscis.gov/i-485' }
  ],
  tps: [
    { number: 'I-821', name: 'Application for Temporary Protected Status', url: 'https://www.uscis.gov/i-821' },
    { number: 'I-765', name: 'Application for Employment Authorization', url: 'https://www.uscis.gov/i-765' },
    { number: 'I-485', name: 'Application to Register Permanent Residence', url: 'https://www.uscis.gov/i-485' }
  ],
  family: [
    { number: 'I-130', name: 'Petition for Alien Relative', url: 'https://www.uscis.gov/i-130' },
    { number: 'I-485', name: 'Application to Register Permanent Residence', url: 'https://www.uscis.gov/i-485' },
    { number: 'I-864', name: 'Affidavit of Support', url: 'https://www.uscis.gov/i-864' },
    { number: 'I-129F', name: 'Petition for Alien Fiancé(e)', url: 'https://www.uscis.gov/i-129f' },
    { number: 'I-751', name: 'Petition to Remove Conditions on Residence', url: 'https://www.uscis.gov/i-751' },
    { number: 'I-765', name: 'Application for Employment Authorization', url: 'https://www.uscis.gov/i-765' }
  ],
  chnv: [
    { number: 'I-589', name: 'Application for Asylum', url: 'https://www.uscis.gov/i-589' },
    { number: 'I-130', name: 'Petition for Alien Relative', url: 'https://www.uscis.gov/i-130' },
    { number: 'I-485', name: 'Application to Register Permanent Residence', url: 'https://www.uscis.gov/i-485' },
    { number: 'I-765', name: 'Application for Employment Authorization', url: 'https://www.uscis.gov/i-765' },
    { number: 'I-918', name: 'Petition for U Nonimmigrant Status', url: 'https://www.uscis.gov/i-918' }
  ],
  asylum: [
    { number: 'I-589', name: 'Application for Asylum', url: 'https://www.uscis.gov/i-589' },
    { number: 'I-765', name: 'Application for Employment Authorization', url: 'https://www.uscis.gov/i-765' },
    { number: 'I-485', name: 'Application to Register Permanent Residence', url: 'https://www.uscis.gov/i-485' }
  ],
  greenCard: [
    { number: 'N-400', name: 'Application for Naturalization', url: 'https://www.uscis.gov/n-400' },
    { number: 'I-90', name: 'Application to Replace Permanent Resident Card', url: 'https://www.uscis.gov/i-90' },
    { number: 'I-751', name: 'Petition to Remove Conditions on Residence', url: 'https://www.uscis.gov/i-751' },
    { number: 'I-130', name: 'Petition for Alien Relative', url: 'https://www.uscis.gov/i-130' },
    { number: 'I-131', name: 'Application for Travel Document', url: 'https://www.uscis.gov/i-131' }
  ],
  other: [
    { number: 'I-589', name: 'Application for Asylum', url: 'https://www.uscis.gov/i-589' },
    { number: 'I-821', name: 'Application for Temporary Protected Status', url: 'https://www.uscis.gov/i-821' },
    { number: 'I-765', name: 'Application for Employment Authorization', url: 'https://www.uscis.gov/i-765' }
  ]
}

const formsTranslations = {
  en: {
    'Application for Asylum': 'Application for Asylum',
    'Application for Temporary Protected Status': 'Application for Temporary Protected Status',
    'Application for Employment Authorization': 'Application for Employment Authorization',
    'Application to Extend/Change Nonimmigrant Status': 'Application to Extend/Change Nonimmigrant Status',
    'Certificate of Eligibility for Nonimmigrant Student Status': 'Certificate of Eligibility for Nonimmigrant Student Status',
    'Immigrant Petition for Alien Worker': 'Immigrant Petition for Alien Worker',
    'Petition for a Nonimmigrant Worker': 'Petition for a Nonimmigrant Worker',
    'Application to Register Permanent Residence': 'Application to Register Permanent Residence',
    'Application for Naturalization': 'Application for Naturalization',
    'Application to Replace Permanent Resident Card': 'Application to Replace Permanent Resident Card',
    'Petition to Remove Conditions on Residence': 'Petition to Remove Conditions on Residence',
    'Petition for Alien Relative': 'Petition for Alien Relative',
    'Application for Travel Document': 'Application for Travel Document',
    'Affidavit of Support': 'Affidavit of Support',
    'Petition for Alien Fiancé(e)': 'Petition for Alien Fiancé(e)',
    'Petition for U Nonimmigrant Status': 'Petition for U Nonimmigrant Status (Crime Victims)'
  },
  ht: {
    'Application for Asylum': 'Aplikasyon pou Azil',
    'Application for Temporary Protected Status': 'Aplikasyon pou Estati Pwoteksyon Tanporè',
    'Application for Employment Authorization': 'Aplikasyon pou Otorizasyon Travay',
    'Application to Extend/Change Nonimmigrant Status': 'Aplikasyon pou Pwolonje/Chanje Estati Nonimigran',
    'Certificate of Eligibility for Nonimmigrant Student Status': 'Sètifika Kalifikasyon pou Estati Etidyan Nonimigran',
    'Immigrant Petition for Alien Worker': 'Petisyon Imigran pou Travayè Etranje',
    'Petition for a Nonimmigrant Worker': 'Petisyon pou Travayè Nonimigran',
    'Application to Register Permanent Residence': 'Aplikasyon pou Anrejistre Rezidans Pèmanan',
    'Application for Naturalization': 'Aplikasyon pou Natiralizasyon',
    'Application to Replace Permanent Resident Card': 'Aplikasyon pou Ranplase Kat Rezidan Pèmanan',
    'Petition to Remove Conditions on Residence': 'Petisyon pou Retire Kondisyon sou Rezidans',
    'Petition for Alien Relative': 'Petisyon pou Fanmi Etranje',
    'Application for Travel Document': 'Aplikasyon pou Dokiman Vwayaj',
    'Affidavit of Support': 'Afidavi Sipò',
    'Petition for Alien Fiancé(e)': 'Petisyon pou Fiyanse Etranje',
    'Petition for U Nonimmigrant Status': 'Petisyon pou Estati U Nonimigran (Viktim Krim)'
  }
}

function FormsFinder({ status, language, t }) {
  const forms = formsByStatus[status] || formsByStatus.other
  const formNames = formsTranslations[language] || formsTranslations.en

  return (
    <div className="forms-finder">
      <h2>{t('formsTitle')}</h2>
      <p className="forms-desc">{t('formsDesc')}</p>
      
      <div className="forms-list">
        {forms.map((form, index) => (
          <div key={index} className="form-item">
            <div className="form-header">
              <span className="form-number">Form {form.number}</span>
              <h3>{formNames[form.name] || form.name}</h3>
            </div>
            <div className="form-actions">
              <a 
                href={form.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="form-button primary"
              >
                {t('downloadForm')}
              </a>
              <a 
                href={`${form.url}#instructions`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="form-button secondary"
              >
                {t('viewInstructions')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FormsFinder

