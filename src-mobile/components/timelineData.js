export const timelineData = {
  justArrived: {
    en: [
      { step: 'Immediate', time: '0-30 days', description: 'Consult with immigration attorney, gather documents' },
      { step: 'Short-term', time: '1-6 months', description: 'Apply for TPS, asylum, or appropriate visa' },
      { step: 'Medium-term', time: '6 months - 2 years', description: 'Process applications, maintain status' },
      { step: 'Long-term', time: '2-5 years', description: 'Path to permanent residency if eligible' }
    ],
    ht: [
      { step: 'Imedyat', time: '0-30 jou', description: 'Konsilte avèk avoka imigrasyon, rasanble dokiman' },
      { step: 'Kout tèm', time: '1-6 mwa', description: 'Aplike pou TPS, azil, oswa viza apwopriye' },
      { step: 'Mwayen tèm', time: '6 mwa - 2 ane', description: 'Pwosese aplikasyon, kenbe estati' },
      { step: 'Long tèm', time: '2-5 ane', description: 'Chemen pou rezidans pèmanan si ou kalifye' }
    ]
  },
  tourist: {
    en: [
      { step: 'Current', time: '0-6 months', description: 'Valid tourist visa, cannot work' },
      { step: 'Option 1', time: '3-6 months', description: 'Apply to change status (student/work)' },
      { step: 'Option 2', time: '6-12 months', description: 'Apply for TPS if eligible' },
      { step: 'Long-term', time: '1-3 years', description: 'Path to permanent status through new visa' }
    ],
    ht: [
      { step: 'Kounye a', time: '0-6 mwa', description: 'Viza touris valab, pa ka travay' },
      { step: 'Opsyon 1', time: '3-6 mwa', description: 'Aplike pou chanje estati (etidyan/travay)' },
      { step: 'Opsyon 2', time: '6-12 mwa', description: 'Aplike pou TPS si ou kalifye' },
      { step: 'Long tèm', time: '1-3 ane', description: 'Chemen pou estati pèmanan atravè nouvo viza' }
    ]
  },
  student: {
    en: [
      { step: 'During Studies', time: '2-4 years', description: 'Maintain F-1 status, complete degree' },
      { step: 'After Graduation', time: '0-12 months', description: 'Apply for OPT work authorization' },
      { step: 'Work Visa', time: '1-2 years', description: 'Employer sponsors H-1B visa' },
      { step: 'Green Card', time: '2-5 years', description: 'Employer sponsors permanent residency' }
    ],
    ht: [
      { step: 'Pandan Etid', time: '2-4 ane', description: 'Kenbe estati F-1, konplete diplòm' },
      { step: 'Apre Gradyasyon', time: '0-12 mwa', description: 'Aplike pou otorizasyon travay OPT' },
      { step: 'Viza Travay', time: '1-2 ane', description: 'Anplwayè garanti viza H-1B' },
      { step: 'Kat Vèt', time: '2-5 ane', description: 'Anplwayè garanti rezidans pèmanan' }
    ]
  },
  work: {
    en: [
      { step: 'Current', time: '1-3 years', description: 'Work visa valid, employed' },
      { step: 'Green Card Process', time: '1-2 years', description: 'Employer files labor certification' },
      { step: 'Application', time: '6-18 months', description: 'File I-140 and I-485 forms' },
      { step: 'Permanent Residency', time: '2-4 years total', description: 'Receive green card' }
    ],
    ht: [
      { step: 'Kounye a', time: '1-3 ane', description: 'Viza travay valab, anplwaye' },
      { step: 'Pwosesis Kat Vèt', time: '1-2 ane', description: 'Anplwayè depoze sètifikasyon travay' },
      { step: 'Aplikasyon', time: '6-18 mwa', description: 'Depoze fòm I-140 ak I-485' },
      { step: 'Rezidans Pèmanan', time: '2-4 ane total', description: 'Resevwa kat vèt' }
    ]
  },
  tps: {
    en: [
      { step: 'Current', time: 'Ongoing', description: 'TPS status, must renew periodically' },
      { step: 'While on TPS', time: '1-3 years', description: 'Apply for permanent residency if eligible' },
      { step: 'Application Process', time: '1-2 years', description: 'Family or employment-based green card' },
      { step: 'Permanent Status', time: '2-5 years', description: 'Path to green card completion' }
    ],
    ht: [
      { step: 'Kounye a', time: 'Kontinyèl', description: 'Estati TPS, dwe renouvle peryodikman' },
      { step: 'Pandan TPS', time: '1-3 ane', description: 'Aplike pou rezidans pèmanan si ou kalifye' },
      { step: 'Pwosesis Aplikasyon', time: '1-2 ane', description: 'Kat vèt ki baze sou fanmi oswa anplwayman' },
      { step: 'Estati Pèmanan', time: '2-5 ane', description: 'Chemen pou konplete kat vèt' }
    ]
  },
  asylum: {
    en: [
      { step: 'Application', time: '0-6 months', description: 'File asylum application' },
      { step: 'Pending', time: '6 months - 2 years', description: 'Wait for interview and decision' },
      { step: 'After Approval', time: '1 year', description: 'Eligible to apply for green card' },
      { step: 'Citizenship', time: '5 years after green card', description: 'Eligible for naturalization' }
    ],
    ht: [
      { step: 'Aplikasyon', time: '0-6 mwa', description: 'Depoze aplikasyon azil' },
      { step: 'Ap tann', time: '6 mwa - 2 ane', description: 'Tann entèvyou ak desizyon' },
      { step: 'Apre Apwobasyon', time: '1 ane', description: 'Kalifye pou aplike pou kat vèt' },
      { step: 'Sitwayènte', time: '5 ane apre kat vèt', description: 'Kalifye pou natiralizasyon' }
    ]
  },
  other: {
    en: [
      { step: 'Assessment', time: 'Immediate', description: 'Consult with attorney to understand status' },
      { step: 'Planning', time: '1-3 months', description: 'Identify best pathway forward' },
      { step: 'Application', time: 'Varies', description: 'File appropriate applications' },
      { step: 'Process', time: 'Varies', description: 'Follow through with chosen pathway' }
    ],
    ht: [
      { step: 'Evalyasyon', time: 'Imedyat', description: 'Konsilte avèk avoka pou konprann estati' },
      { step: 'Planifikasyon', time: '1-3 mwa', description: 'Idantifye pi bon chemen pou avanse' },
      { step: 'Aplikasyon', time: 'Varye', description: 'Depoze aplikasyon apwopriye' },
      { step: 'Pwosesis', time: 'Varye', description: 'Siviv ak chemen chwazi a' }
    ]
  }
}

