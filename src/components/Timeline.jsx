import React from 'react'
import './Timeline.css'

const timelineData = {
  justArrived: {
    en: [
      { step: 'Immediate (Week 1)', time: '0-7 days', description: 'Document your entry date. Get your I-94 from i94.cbp.dhs.gov. Find an immigration attorney for free consultation.', critical: true },
      { step: 'Urgent (Month 1)', time: '1-30 days', description: 'Consult attorney to evaluate options. Gather documents from Haiti (birth certificate, ID). Understand the 1-year asylum deadline.', critical: true },
      { step: 'Short-term', time: '1-6 months', description: 'File TPS application (if eligible - but note TPS ends Feb 2026). File asylum if you fear persecution. Apply for family petition if eligible.', critical: false },
      { step: 'Work Authorization', time: '150-180 days', description: 'If asylum filed, apply for work permit (EAD) after 150 days. Currently processing in under 30 days once eligible.', critical: false },
      { step: 'Medium-term', time: '6 months - 2 years', description: 'Attend biometrics, interviews. Wait for case decision. Maintain legal status.', critical: false },
      { step: 'Long-term Path', time: '2-10+ years', description: 'Green card after 1 year of asylum approval, or through family (immediate relatives: 10-23 months, others: 7-20+ years).', critical: false }
    ],
    ht: [
      { step: 'Imedyat (Semèn 1)', time: '0-7 jou', description: 'Dokimante dat antre ou. Jwenn I-94 ou nan i94.cbp.dhs.gov. Jwenn yon avoka imigrasyon pou konsiltasyon gratis.', critical: true },
      { step: 'Ijan (Mwa 1)', time: '1-30 jou', description: 'Konsilte avoka pou evalye opsyon. Rasanble dokiman soti Ayiti (batistè, ID). Konprann dat limit 1 ane azil la.', critical: true },
      { step: 'Kout tèm', time: '1-6 mwa', description: 'Depoze aplikasyon TPS (si elijib - men note TPS fini Fev 2026). Depoze azil si ou pè pèsekisyon. Aplike pou petisyon fanmi si elijib.', critical: false },
      { step: 'Otorizasyon Travay', time: '150-180 jou', description: 'Si azil depoze, aplike pou pèmi travay (EAD) apre 150 jou. Kounye a ap trete nan mwens pase 30 jou yon fwa elijib.', critical: false },
      { step: 'Mwayen tèm', time: '6 mwa - 2 ane', description: 'Asiste biyometrik, entèvyou. Tann desizyon ka. Kenbe estati legal.', critical: false },
      { step: 'Chemen Long Tèm', time: '2-10+ ane', description: 'Kat vèt apre 1 ane apwobasyon azil, oswa atravè fanmi (fanmi imedya: 10-23 mwa, lòt: 7-20+ ane).', critical: false }
    ]
  },
  tourist: {
    en: [
      { step: 'Check I-94 NOW', time: 'Immediate', description: 'Go to i94.cbp.dhs.gov to find your authorized stay period. This is your most important deadline.', critical: true },
      { step: 'Current Status', time: '0-6 months typical', description: 'B-1/B-2 visa allows stay for tourism only. CANNOT work. Overstay triggers 3-year or 10-year bars.', critical: true },
      { step: 'Extension Request', time: 'File before I-94 expires', description: 'Form I-539 to request extension. Processing: 2-4 months. Extensions discretionary, up to 6 more months.', critical: false },
      { step: 'Change of Status Option', time: '3-6 months processing', description: 'If changing to F-1 (student): I-539 + school acceptance + I-20. Must file before I-94 expires.', critical: false },
      { step: 'If Overstayed', time: 'Consult attorney immediately', description: 'Options limited. 180+ days = 3-year bar. 1+ year = 10-year bar. Some waivers exist. Attorney needed.', critical: true }
    ],
    ht: [
      { step: 'Tcheke I-94 KOUNYE A', time: 'Imedyat', description: 'Ale nan i94.cbp.dhs.gov pou jwenn peryòd sejou otorize ou. Sa a se dat limit ou ki pi enpòtan.', critical: true },
      { step: 'Estati Aktyèl', time: '0-6 mwa tipik', description: 'Viza B-1/B-2 pèmèt sejou pou touris sèlman. PA KA travay. Depase tan deklanche entèdiksyon 3 ane oswa 10 ane.', critical: true },
      { step: 'Demand Ekstansyon', time: 'Depoze anvan I-94 ekspire', description: 'Fòm I-539 pou mande ekstansyon. Tretman: 2-4 mwa. Ekstansyon diskresyonè, jiska 6 mwa anplis.', critical: false },
      { step: 'Opsyon Chanjman Estati', time: '3-6 mwa tretman', description: 'Si chanje pou F-1 (etidyan): I-539 + akseptasyon lekòl + I-20. Dwe depoze anvan I-94 ekspire.', critical: false },
      { step: 'Si Depase Tan', time: 'Konsilte avoka imedyatman', description: 'Opsyon limite. 180+ jou = entèdiksyon 3 ane. 1+ ane = entèdiksyon 10 ane. Gen kèk dispans. Avoka nesesè.', critical: true }
    ]
  },
  student: {
    en: [
      { step: 'During Studies', time: '2-4 years', description: 'Maintain F-1 status: full-time enrollment, valid I-20. Can work on-campus 20 hrs/week. Report address changes within 10 days.', critical: false },
      { step: 'OPT Application', time: '90 days before to 60 days after graduation', description: 'Apply for 12-month work authorization. Processing: currently under 30 days for student EADs. Don\'t miss this window!', critical: true },
      { step: 'OPT Period', time: '12 months (36 for STEM)', description: 'Work in your field. 90-day unemployment limit - exceeding this ends your status. STEM extension adds 24 months.', critical: false },
      { step: 'H-1B Lottery', time: 'March registration each year', description: 'Registration: March 7-24. Results: late March. If selected, file petition within 90 days. Visa starts October 1.', critical: true },
      { step: 'H-1B Processing', time: '4-8 months (15 days premium)', description: 'If selected, petition filed April-June. Regular: 4-8 months. Premium ($2,805): 15 days. Cap-gap extends OPT until April 1.', critical: false },
      { step: 'Green Card Path', time: '3-10+ years total', description: 'PERM: ~16 months. I-140: 6-8 months. I-485: 8-20 months. India/China nationals face 10+ year additional wait.', critical: false }
    ],
    ht: [
      { step: 'Pandan Etid', time: '2-4 ane', description: 'Kenbe estati F-1: enskripsyon tan plen, I-20 valab. Ka travay sou kanpis 20 èdtan/semèn. Rapòte chanjman adrès nan 10 jou.', critical: false },
      { step: 'Aplikasyon OPT', time: '90 jou anvan jiska 60 jou apre gradyasyon', description: 'Aplike pou otorizasyon travay 12 mwa. Tretman: kounye a mwens pase 30 jou pou EAD etidyan. Pa manke fenèt sa a!', critical: true },
      { step: 'Peryòd OPT', time: '12 mwa (36 pou STEM)', description: 'Travay nan domèn ou. Limit chomaj 90 jou - depase sa a fini estati ou. Ekstansyon STEM ajoute 24 mwa.', critical: false },
      { step: 'Lotri H-1B', time: 'Enskripsyon Mas chak ane', description: 'Enskripsyon: 7-24 Mas. Rezilta: fen Mas. Si chwazi, depoze petisyon nan 90 jou. Viza kòmanse 1ye Oktòb.', critical: true },
      { step: 'Tretman H-1B', time: '4-8 mwa (15 jou premium)', description: 'Si chwazi, petisyon depoze Avril-Jen. Regilye: 4-8 mwa. Premium ($2,805): 15 jou. Cap-gap pwolonje OPT jiska 1ye Avril.', critical: false },
      { step: 'Chemen Kat Vèt', time: '3-10+ ane total', description: 'PERM: ~16 mwa. I-140: 6-8 mwa. I-485: 8-20 mwa. Nasyonal End/Lachin fè fas a 10+ ane tann adisyonèl.', critical: false }
    ]
  },
  work: {
    en: [
      { step: 'Current H-1B Status', time: '3 years initial', description: 'Valid for specific employer. Can extend to 6 years total. Beyond 6 years if green card in process (I-140 filed 365+ days ago).', critical: false },
      { step: 'Start Green Card EARLY', time: 'Start Year 1', description: 'Tell employer you want green card sponsorship. PERM process alone takes ~16 months. Don\'t wait until year 5.', critical: true },
      { step: 'PERM Labor Certification', time: '~16 months (483 days current)', description: 'Employer proves no US workers available. Requires job ads, recruitment. DOL processes - no premium processing available.', critical: false },
      { step: 'I-140 Petition', time: '6-8 months (15 days premium)', description: 'Employer files immigrant petition. Premium processing: $2,805 for 15-day decision. Approval locks in your priority date.', critical: false },
      { step: 'I-485 Adjustment', time: '8-20 months (varies by office)', description: 'File when priority date is current. After 180 days pending, you can change employers without losing place in line.', critical: false },
      { step: 'CRITICAL: If Laid Off', time: '60 days grace period ONLY', description: 'Find new H-1B sponsor, change status, or leave US within 60 days. Start job search immediately. Time is critical.', critical: true }
    ],
    ht: [
      { step: 'Estati H-1B Aktyèl', time: '3 ane inisyal', description: 'Valab pou anplwayè espesifik. Ka pwolonje jiska 6 ane total. Pi lwen pase 6 ane si kat vèt nan pwosesis (I-140 depoze 365+ jou de sa).', critical: false },
      { step: 'Kòmanse Kat Vèt BONÈ', time: 'Kòmanse Ane 1', description: 'Di anplwayè ou vle patwonaj kat vèt. Pwosesis PERM sèlman pran ~16 mwa. Pa tann jiska ane 5.', critical: true },
      { step: 'Sètifikasyon Travay PERM', time: '~16 mwa (483 jou aktyèl)', description: 'Anplwayè pwouve pa gen travayè ameriken disponib. Mande piblisite travay, rekritman. DOL trete - pa gen tretman premium disponib.', critical: false },
      { step: 'Petisyon I-140', time: '6-8 mwa (15 jou premium)', description: 'Anplwayè depoze petisyon imigran. Tretman premium: $2,805 pou desizyon 15 jou. Apwobasyon bloke dat priyorite ou.', critical: false },
      { step: 'Ajisteman I-485', time: '8-20 mwa (varye pa biwo)', description: 'Depoze lè dat priyorite aktyèl. Apre 180 jou ap tann, ou ka chanje anplwayè san pèdi plas nan liy.', critical: false },
      { step: 'KRITIK: Si Revoke', time: '60 jou peryòd gras SÈLMAN', description: 'Jwenn nouvo garanti H-1B, chanje estati, oswa kite Etazini nan 60 jou. Kòmanse chèche travay imedyatman. Tan kritik.', critical: true }
    ]
  },
  tps: {
    en: [
      { step: '⚠️ TPS ENDING', time: 'February 3, 2026', description: 'TPS for Haiti is TERMINATED. All benefits end Feb 3, 2026. This is NOT a renewal - the program is ending. You MUST find alternative status.', critical: true },
      { step: 'URGENT: Consult Attorney', time: 'NOW', description: 'You have limited time. Get professional help to evaluate ALL options: family petition, asylum, employment sponsorship, other relief.', critical: true },
      { step: 'Current EAD Valid', time: 'Until Feb 3, 2026', description: 'Your work permit remains valid until Feb 3, 2026. Continue working legally. Save money. Document your presence.', critical: false },
      { step: 'Family Petition Option', time: '10-23 months (immediate relatives)', description: 'If US citizen spouse/parent/adult child can petition: immediate relatives have no wait. File I-130 + I-485 together.', critical: false },
      { step: 'Asylum Option', time: 'Varies - months to years', description: 'If you fear persecution in Haiti, TPS stops the 1-year clock. File before TPS ends. Requires showing fear on protected grounds.', critical: false },
      { step: 'After Feb 3, 2026', time: 'Without new status', description: 'If no other status obtained, you become removable. ICE enforcement possible. This is why acting NOW is critical.', critical: true }
    ],
    ht: [
      { step: '⚠️ TPS AP FINI', time: '3 Fevriye 2026', description: 'TPS pou Ayiti FINI. Tout benefis fini 3 Fev 2026. Sa a PA yon renouvelman - pwogram nan ap fini. Ou DWE jwenn estati altènatif.', critical: true },
      { step: 'IJAN: Konsilte Avoka', time: 'KOUNYE A', description: 'Ou gen tan limite. Jwenn èd pwofesyonèl pou evalye TOUT opsyon: petisyon fanmi, azil, patwonaj anplwayè, lòt sekou.', critical: true },
      { step: 'EAD Aktyèl Valab', time: 'Jiska 3 Fev 2026', description: 'Pèmi travay ou rete valab jiska 3 Fev 2026. Kontinye travay legalman. Ekonomize lajan. Dokimante prezans ou.', critical: false },
      { step: 'Opsyon Petisyon Fanmi', time: '10-23 mwa (fanmi imedya)', description: 'Si mari/madanm/paran/pitit adilt sitwayen ameriken ka petisyone: fanmi imedya pa gen tann. Depoze I-130 + I-485 ansanm.', critical: false },
      { step: 'Opsyon Azil', time: 'Varye - mwa a ane', description: 'Si ou pè pèsekisyon nan Ayiti, TPS kanpe revèy 1 ane a. Depoze anvan TPS fini. Mande montre laperèz sou rezon pwoteje.', critical: false },
      { step: 'Apre 3 Fev 2026', time: 'San nouvo estati', description: 'Si pa gen lòt estati jwenn, ou vin kapab retire. Aplikasyon ICE posib. Se poutèt sa aji KOUNYE A kritik.', critical: true }
    ]
  },
  asylum: {
    en: [
      { step: '⚠️ 1-Year Deadline', time: 'Within 1 year of arrival', description: 'You MUST file Form I-589 within one year of entering the US. This deadline is strict. Check your I-94 at i94.cbp.dhs.gov.', critical: true },
      { step: 'File I-589', time: 'Before 1-year anniversary', description: 'Complete application in English. Include spouse and children under 21. File online (some cases) or by mail. Keep copies of everything.', critical: true },
      { step: 'Receipt & Biometrics', time: '2-4 weeks after filing', description: 'USCIS sends receipt notice, then biometrics appointment. Attend biometrics - fingerprints and photo required.', critical: false },
      { step: 'Work Permit Eligibility', time: '150 days after filing', description: 'File Form I-765 on day 150. Can be approved after 180 days. Currently processing in under 30 days once eligible.', critical: false },
      { step: 'Asylum Interview', time: '45 days (law) but often months-years', description: 'Law requires interview within 45 days, but backlogs cause delays. Prepare thoroughly. Bring interpreter if needed.', critical: false },
      { step: 'Decision', time: '180 days (law) but varies widely', description: 'Approval → can apply for green card in 1 year. Referral to court → longer process. Denial → appeal options exist.', critical: false },
      { step: 'Green Card', time: '1 year after approval + 8-20 months', description: 'After 1 year of asylee status, file I-485 for permanent residence. Current processing: 8-20 months.', critical: false },
      { step: 'Citizenship', time: '5 years after green card', description: 'Apply for naturalization (N-400) after 5 years as permanent resident. Current processing: 6.1 months.', critical: false }
    ],
    ht: [
      { step: '⚠️ Dat Limit 1 Ane', time: 'Nan 1 ane apre rive', description: 'Ou DWE depoze Fòm I-589 nan yon ane apre ou antre Etazini. Dat limit sa a estrik. Tcheke I-94 ou nan i94.cbp.dhs.gov.', critical: true },
      { step: 'Depoze I-589', time: 'Anvan anivèsè 1 ane', description: 'Ranpli aplikasyon an Anglè. Mete mari/madanm ak timoun ki gen mwens pase 21 an. Depoze sou entènèt (kèk ka) oswa pa lapòs. Kenbe kopi tout bagay.', critical: true },
      { step: 'Resi & Biyometrik', time: '2-4 semèn apre depo', description: 'USCIS voye avi resi, answit randevou biyometrik. Asiste biyometrik - anprent ak foto obligatwa.', critical: false },
      { step: 'Elijibilite Pèmi Travay', time: '150 jou apre depo', description: 'Depoze Fòm I-765 nan jou 150. Ka apwouve apre 180 jou. Kounye a ap trete nan mwens pase 30 jou yon fwa elijib.', critical: false },
      { step: 'Entèvyou Azil', time: '45 jou (lalwa) men souvan mwa-ane', description: 'Lalwa mande entèvyou nan 45 jou, men reta lakòz reta. Prepare byen. Pote entèprèt si nesesè.', critical: false },
      { step: 'Desizyon', time: '180 jou (lalwa) men varye anpil', description: 'Apwobasyon → ka aplike pou kat vèt nan 1 ane. Refere nan tribinal → pwosesis pi long. Refi → opsyon apèl egziste.', critical: false },
      { step: 'Kat Vèt', time: '1 ane apre apwobasyon + 8-20 mwa', description: 'Apre 1 ane estati azile, depoze I-485 pou rezidans pèmanan. Tretman aktyèl: 8-20 mwa.', critical: false },
      { step: 'Sitwayènte', time: '5 ane apre kat vèt', description: 'Aplike pou natiralizasyon (N-400) apre 5 ane kòm rezidan pèmanan. Tretman aktyèl: 6.1 mwa.', critical: false }
    ]
  },
  family: {
    en: [
      { step: 'Determine Your Category', time: 'Immediately', description: 'Immediate relatives (spouse, parent, unmarried child under 21 of US citizen) have NO wait. Others have visa backlogs of 2-20+ years.', critical: true },
      { step: 'US Citizen Spouse', time: '10-23 months total', description: 'File I-130 + I-485 together (if in US). Biometrics in 4-6 weeks. Interview in 8-14 months. Conditional green card if married <2 years.', critical: false },
      { step: 'Green Card Holder Spouse (F2A)', time: '2-3 years', description: 'File I-130 first. Wait for priority date to become current. Then file I-485 or consular processing. Current wait: ~2 years.', critical: false },
      { step: 'K-1 Fiancé Visa', time: '12-18 months', description: 'US citizen petitions with I-129F. Processing 10-14 months. Enter US, marry within 90 days, file for green card.', critical: false },
      { step: 'Affidavit of Support', time: 'Required for all', description: 'Sponsor must file I-864 showing 125% of poverty guidelines. Can use joint sponsor if income insufficient.', critical: true },
      { step: 'Conditional to Permanent', time: '21-24 months after approval', description: 'If married <2 years at approval, get 2-year conditional green card. File I-751 jointly 90 days before expiration.', critical: true },
      { step: 'Citizenship Eligibility', time: '3 years as LPR', description: 'Spouses of US citizens can apply for citizenship after 3 years (vs. 5 years normally). Must remain married.', critical: false }
    ],
    ht: [
      { step: 'Detèmine Kategori Ou', time: 'Imedyatman', description: 'Fanmi imedya (mari/madanm, paran, pitit ki poko marye ki gen mwens pase 21 an nan sitwayen ameriken) PA GEN tann. Lòt gen reta viza 2-20+ ane.', critical: true },
      { step: 'Mari/Madanm Sitwayen Ameriken', time: '10-23 mwa total', description: 'Depoze I-130 + I-485 ansanm (si nan Etazini). Biyometrik nan 4-6 semèn. Entèvyou nan 8-14 mwa. Kat vèt kondisyonèl si marye <2 ane.', critical: false },
      { step: 'Mari/Madanm Rezidan Pèmanan (F2A)', time: '2-3 ane', description: 'Depoze I-130 dabò. Tann pou dat priyorite vin aktyèl. Answit depoze I-485 oswa pwosesis konsilè. Tann aktyèl: ~2 ane.', critical: false },
      { step: 'Viza Fiyanse K-1', time: '12-18 mwa', description: 'Sitwayen ameriken petisyone ak I-129F. Tretman 10-14 mwa. Antre Etazini, marye nan 90 jou, depoze pou kat vèt.', critical: false },
      { step: 'Afidavi Sipò', time: 'Obligatwa pou tout', description: 'Garanti dwe depoze I-864 ki montre 125% gid povrete. Ka itilize ko-garanti si revni pa ase.', critical: true },
      { step: 'Kondisyonèl a Pèmanan', time: '21-24 mwa apre apwobasyon', description: 'Si marye <2 ane nan apwobasyon, jwenn kat vèt kondisyonèl 2 ane. Depoze I-751 ansanm 90 jou anvan ekspirasyon.', critical: true },
      { step: 'Elijibilite Sitwayènte', time: '3 ane kòm LPR', description: 'Mari/madanm sitwayen ameriken ka aplike pou sitwayènte apre 3 ane (olye 5 ane nòmalman). Dwe rete marye.', critical: false }
    ]
  },
  greenCard: {
    en: [
      { step: 'Maintain Your Status', time: 'Ongoing', description: 'Keep your green card valid, file taxes annually, report address changes within 10 days (AR-11). Don\'t stay outside US more than 6 months.', critical: false },
      { step: 'Track 5-Year Mark', time: '5 years as LPR', description: 'After 5 years as permanent resident (3 years if married to US citizen), you become eligible for citizenship.', critical: true },
      { step: 'Prepare for Citizenship', time: 'Before applying', description: 'Study English and civics. Free materials at uscis.gov/citizenship. Practice the 100 civics questions.', critical: false },
      { step: 'File N-400', time: 'Up to 90 days early', description: 'Apply for naturalization up to 90 days before your 5-year (or 3-year) anniversary. File online at uscis.gov.', critical: true },
      { step: 'Biometrics & Interview', time: '2-6 months after filing', description: 'Attend biometrics appointment. Then interview with USCIS officer - English test, civics test, and application review.', critical: false },
      { step: 'Oath Ceremony', time: '1-3 months after approval', description: 'Take the Oath of Allegiance and receive your Certificate of Naturalization. You are now a US citizen!', critical: false }
    ],
    ht: [
      { step: 'Kenbe Estati Ou', time: 'Kontinyèl', description: 'Kenbe kat vèt ou valab, depoze taks chak ane, rapòte chanjman adrès nan 10 jou (AR-11). Pa rete deyò Etazini plis pase 6 mwa.', critical: false },
      { step: 'Swiv Mak 5 Ane', time: '5 ane kòm LPR', description: 'Apre 5 ane kòm rezidan pèmanan (3 ane si marye ak sitwayen ameriken), ou vin elijib pou sitwayènte.', critical: true },
      { step: 'Prepare pou Sitwayènte', time: 'Anvan aplike', description: 'Etidye Anglè ak sivik. Materyèl gratis nan uscis.gov/citizenship. Pratike 100 kesyon sivik yo.', critical: false },
      { step: 'Depoze N-400', time: 'Jiska 90 jou bonè', description: 'Aplike pou natiralizasyon jiska 90 jou anvan anivèsè 5 ane (oswa 3 ane) ou. Depoze sou entènèt nan uscis.gov.', critical: true },
      { step: 'Biyometrik & Entèvyou', time: '2-6 mwa apre depo', description: 'Asiste randevou biyometrik. Answit entèvyou avèk ofisye USCIS - tès Anglè, tès sivik, ak revizyon aplikasyon.', critical: false },
      { step: 'Seremoni Sèman', time: '1-3 mwa apre apwobasyon', description: 'Pran Sèman Fidelite epi resevwa Sètifika Natiralizasyon ou. Ou se yon sitwayen ameriken kounye a!', critical: false }
    ]
  },
  other: {
    en: [
      { step: 'URGENT: Get Legal Help', time: 'Immediately', description: 'Your situation needs professional evaluation. Find free help at justice.gov/eoir/find-legal-representation.', critical: true },
      { step: 'Document Everything', time: 'Ongoing', description: 'Gather proof of entry date, continuous presence (bills, records, anything with dates). This evidence is critical for any application.', critical: false },
      { step: 'Know Your Rights', time: 'Always', description: 'Right to remain silent. Right to an attorney. Don\'t sign documents you don\'t understand. Don\'t lie to immigration officers.', critical: true },
      { step: 'Do NOT Leave US', time: 'Without attorney advice', description: 'Leaving the US if out of status can trigger 3 or 10-year bars. Only travel after consulting an attorney.', critical: true },
      { step: 'Explore All Options', time: 'With attorney', description: 'TPS (ending Feb 2026), asylum (1-year deadline), family petition, VAWA, U-visa, employment sponsorship - evaluate all paths.', critical: false },
      { step: 'Act Before Deadlines', time: 'Varies by option', description: 'Asylum: 1 year from entry. TPS: ends Feb 2026. Some relief has no deadline but immigration law changes frequently.', critical: true }
    ],
    ht: [
      { step: 'IJAN: Jwenn Èd Legal', time: 'Imedyatman', description: 'Sitiyasyon ou bezwen evalyasyon pwofesyonèl. Jwenn èd gratis nan justice.gov/eoir/find-legal-representation.', critical: true },
      { step: 'Dokimante Tout Bagay', time: 'Kontinyèl', description: 'Rasanble prèv dat antre, prezans kontinyèl (fakti, dosye, nenpòt bagay ki gen dat). Prèv sa a kritik pou nenpòt aplikasyon.', critical: false },
      { step: 'Konnen Dwa Ou', time: 'Toujou', description: 'Dwa pou rete an silans. Dwa a yon avoka. Pa siyen dokiman ou pa konprann. Pa bay manti bay ofisye imigrasyon.', critical: true },
      { step: 'PA Kite Etazini', time: 'San konsèy avoka', description: 'Kite Etazini si deyò estati ka deklanche entèdiksyon 3 oswa 10 ane. Vwayaje sèlman apre konsilte yon avoka.', critical: true },
      { step: 'Eksplore Tout Opsyon', time: 'Avèk avoka', description: 'TPS (fini Fev 2026), azil (dat limit 1 ane), petisyon fanmi, VAWA, viza U, patwonaj anplwayè - evalye tout chemen.', critical: false },
      { step: 'Aji Anvan Dat Limit', time: 'Varye pa opsyon', description: 'Azil: 1 ane apre antre. TPS: fini Fev 2026. Gen kèk sekou pa gen dat limit men lwa imigrasyon chanje souvan.', critical: true }
    ]
  }
}

function Timeline({ status, language, t }) {
  const timeline = timelineData[status]?.[language] || timelineData[status]?.en || []

  return (
    <div className="timeline">
      <h2>{t('timelineTitle')}</h2>
      <p className="timeline-disclaimer">
        {language === 'en'
          ? '* Processing times are estimates based on current USCIS data (December 2025) and may vary. Always check uscis.gov for the most current information.'
          : '* Tan tretman yo se estimasyon ki baze sou done USCIS aktyèl (Desanm 2025) epi yo ka varye. Toujou tcheke uscis.gov pou enfòmasyon ki pi aktyèl.'}
      </p>
      <div className="timeline-container">
        {timeline.map((item, index) => (
          <div key={index} className={`timeline-item ${item.critical ? 'critical' : ''}`}>
            <div className="timeline-marker">
              <div className={`marker-number ${item.critical ? 'critical' : ''}`}>
                {item.critical ? '!' : index + 1}
              </div>
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{item.step}</h3>
                <span className={`timeline-time ${item.critical ? 'critical' : ''}`}>{item.time}</span>
              </div>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
