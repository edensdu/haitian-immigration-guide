import React from 'react'
import './StatusInfo.css'

const statusData = {
  justArrived: {
    en: {
      whatThisMeans: 'You have recently arrived in the United States. Your legal options depend on how you entered (with inspection at a port of entry, or without), your country of origin, and whether you have any existing immigration applications or family in the US.',
      criticalWarning: null,
      availableOptions: [
        {
          title: 'Temporary Protected Status (TPS) for Haiti',
          description: 'CRITICAL: TPS for Haiti is being TERMINATED. Benefits end February 3, 2026. If you arrived before June 3, 2024 and were continuously present since August 4, 2024, you may still apply, but this protection will end.',
          eligibility: 'Must have been continuously residing in the US since June 3, 2024, and continuously present since August 4, 2024',
          timeline: 'Applications accepted until Feb 3, 2026, but program is ending',
          cost: '$500 application + $30 biometrics + $410 EAD (H.R. 1 increased fee - cannot be waived)'
        },
        {
          title: 'Asylum',
          description: 'If you fear persecution in Haiti based on race, religion, nationality, political opinion, or membership in a particular social group, you may apply for asylum.',
          eligibility: 'Must file within 1 YEAR of arrival (critical deadline). Must demonstrate well-founded fear of persecution.',
          timeline: 'Interview typically 45 days after filing (by law), but backlogs cause delays of months to years. Work permit eligible after 150 days.',
          cost: '$100 filing fee (new as of 2025) + potential annual fees while pending'
        },
        {
          title: 'CHNV Humanitarian Parole',
          description: 'Program for Cubans, Haitians, Nicaraguans, and Venezuelans allows 2-year parole with a US sponsor. WARNING: Renewals are NOT being allowed - this is temporary status only.',
          eligibility: 'Need a US-based financial sponsor, pass background check, have valid passport',
          timeline: '2 years of parole, but NO path to permanent status through this program alone',
          cost: 'No government fee, but travel costs apply'
        },
        {
          title: 'Family-Based Immigration',
          description: 'If you have immediate relatives who are US citizens (spouse, parent, or adult child), they may petition for you.',
          eligibility: 'Spouse, parent, or unmarried child under 21 of US citizen = immediate relative (no wait). Other family = years of waiting.',
          timeline: 'Immediate relatives: 10-23 months. Other family categories: 7-20+ YEARS depending on relationship and country.',
          cost: '$535 (I-130) + $1,225 (I-485) + $85 biometrics = approximately $1,845 minimum'
        }
      ],
      stepByStep: [
        { step: 1, action: 'Document your entry', details: 'Keep your I-94 record (check i94.cbp.dhs.gov), passport stamps, and any entry documents. These prove your date of entry.' },
        { step: 2, action: 'Consult an immigration attorney IMMEDIATELY', details: 'Many offer free consultations. The 1-year asylum deadline is STRICT. Find accredited representatives at justice.gov/eoir/find-legal-representation' },
        { step: 3, action: 'Do NOT sign any documents you do not understand', details: 'Even at the border or with immigration officers. Ask for an interpreter. You have rights.' },
        { step: 4, action: 'Gather documents from Haiti', details: 'Birth certificate, police records, passport, national ID. Request certified copies if possible.' },
        { step: 5, action: 'Understand your options before choosing', details: 'Each pathway has different requirements, timelines, and consequences. Wrong choices can affect future applications.' }
      ],
      requirements: [
        'Valid passport (or apply for one at Haitian consulate)',
        'Birth certificate from Haiti',
        'Proof of entry date (I-94, passport stamp, airline records)',
        'Two passport-style photos (2x2 inches)',
        'Proof of residence in US (utility bills, lease, mail)',
        'Any immigration documents you have received',
        'Police clearance from Haiti (if available)'
      ]
    },
    ht: {
      whatThisMeans: 'Ou fèk rive nan Etazini. Opsyon legal ou yo depann de kijan ou te antre (avèk enspeksyon nan yon pò antre, oswa san), peyi orijin ou, ak si ou gen nenpòt aplikasyon imigrasyon ki egziste deja oswa fanmi nan Etazini.',
      criticalWarning: null,
      availableOptions: [
        {
          title: 'Estati Pwoteksyon Tanporè (TPS) pou Ayiti',
          description: 'KRITIK: TPS pou Ayiti ap FINI. Benefis yo fini 3 Fevriye 2026. Si ou te rive anvan 3 Jen 2024 epi ou te prezan kontinyèlman depi 4 Out 2024, ou ka toujou aplike, men pwoteksyon sa a ap fini.',
          eligibility: 'Dwe te rete kontinyèlman nan Etazini depi 3 Jen 2024, epi prezan kontinyèlman depi 4 Out 2024',
          timeline: 'Aplikasyon aksepte jiska 3 Fev 2026, men pwogram nan ap fini',
          cost: '$500 aplikasyon + $30 biyometrik + $410 EAD (H.R. 1 ogmante frè - pa ka anile)'
        },
        {
          title: 'Azil',
          description: 'Si ou pè pèsekisyon nan Ayiti ki baze sou ras, relijyon, nasyonalite, opinyon politik, oswa manm nan yon gwoup sosyal patikilye, ou ka aplike pou azil.',
          eligibility: 'Dwe depoze nan 1 ANE apre rive (dat limit kritik). Dwe demontre laperèz byen fonde pou pèsekisyon.',
          timeline: 'Entèvyou tipikman 45 jou apre depo (pa lalwa), men reta lakòz plizyè mwa a ane. Pèmi travay elijib apre 150 jou.',
          cost: '$100 frè depo (nouvo nan 2025) + frè anyèl potansyèl pandan ap tann'
        },
        {
          title: 'CHNV Humanitarian Parole',
          description: 'Pwogram pou Kiben, Ayisyen, Nikaragweyen, ak Venezyelyen pèmèt 2 ane parole avèk yon garanti Ameriken. AVÈTISMAN: Renouvleman pa aksepte - sa a se estati tanporè sèlman.',
          eligibility: 'Bezwen yon garanti finansye ki baze nan Etazini, pase verifikasyon background, gen paspo valab',
          timeline: '2 ane parole, men PA GEN chemen pou estati pèmanan atravè pwogram sa a sèlman',
          cost: 'Pa gen frè gouvènman, men depans vwayaj aplike'
        },
        {
          title: 'Imigrasyon Ki Baze Sou Fanmi',
          description: 'Si ou gen fanmi pwòch ki sitwayen ameriken (mari/madanm, paran, oswa pitit adilt), yo ka petisyone pou ou.',
          eligibility: 'Mari/madanm, paran, oswa pitit ki poko marye ki gen mwens pase 21 an sitwayen ameriken = fanmi imedya (pa gen tann). Lòt fanmi = ane ap tann.',
          timeline: 'Fanmi imedya: 10-23 mwa. Lòt kategori fanmi: 7-20+ ANE depann de relasyon ak peyi.',
          cost: '$535 (I-130) + $1,225 (I-485) + $85 biyometrik = anviwon $1,845 minimòm'
        }
      ],
      stepByStep: [
        { step: 1, action: 'Dokimante antre ou', details: 'Kenbe dosye I-94 ou (tcheke i94.cbp.dhs.gov), so paspo, ak nenpòt dokiman antre. Sa yo pwouve dat antre ou.' },
        { step: 2, action: 'Konsilte yon avoka imigrasyon IMEDYATMAN', details: 'Anpil ofri konsiltasyon gratis. Dat limit 1 ane azil la ESTRIK. Jwenn reprezantan akredite nan justice.gov/eoir/find-legal-representation' },
        { step: 3, action: 'PA siyen okenn dokiman ou pa konprann', details: 'Menm nan fwontyè a oswa avèk ofisye imigrasyon. Mande yon entèprèt. Ou gen dwa.' },
        { step: 4, action: 'Rasanble dokiman soti Ayiti', details: 'Batistè, dosye lapolis, paspo, ID nasyonal. Mande kopi sètifye si posib.' },
        { step: 5, action: 'Konprann opsyon ou yo anvan ou chwazi', details: 'Chak chemen gen diferan egzijans, kalandriye, ak konsekans. Move chwa ka afekte aplikasyon nan lavni.' }
      ],
      requirements: [
        'Paspo valab (oswa aplike pou youn nan konsila ayisyen)',
        'Batistè soti Ayiti',
        'Prèv dat antre (I-94, so paspo, dosye konpayi avyon)',
        'De foto estil paspo (2x2 pous)',
        'Prèv rezidans nan Etazini (fakti sèvis piblik, kontra lokasyon, lapòs)',
        'Nenpòt dokiman imigrasyon ou te resevwa',
        'Sètifika polis soti Ayiti (si disponib)'
      ]
    }
  },
  tourist: {
    en: {
      whatThisMeans: 'You entered the US on a B-1/B-2 visitor visa. This visa is for tourism, visiting family, or business meetings only. You CANNOT work on this visa. Your I-94 shows your authorized stay period (typically 6 months maximum). Overstaying has serious consequences.',
      criticalWarning: 'WARNING: Overstaying your visa by more than 180 days bars you from returning to the US for 3 years. Overstaying by more than 1 year bars you for 10 years.',
      availableOptions: [
        {
          title: 'Change Status to Student (F-1)',
          description: 'If you want to study in the US, you can apply to change your status to F-1 student visa while in the country.',
          eligibility: 'Must be accepted by SEVP-certified school, prove financial ability to pay tuition, maintain residence abroad (technically)',
          timeline: 'Processing: 2-4 months. Must apply BEFORE your I-94 expires.',
          cost: '$370 (I-539) + $350 SEVIS fee + tuition costs'
        },
        {
          title: 'Temporary Protected Status (TPS)',
          description: 'CRITICAL: TPS for Haiti is being TERMINATED on February 3, 2026. Even if you qualify, this is ending.',
          eligibility: 'Must have been continuously residing in US since June 3, 2024, and continuously present since August 4, 2024',
          timeline: 'Program ends Feb 3, 2026',
          cost: '$500 application + $30 biometrics + $410 EAD (H.R. 1 fee - cannot be waived)'
        },
        {
          title: 'Asylum (if eligible)',
          description: 'If you developed a fear of returning to Haiti due to persecution, you may apply for asylum.',
          eligibility: 'Must file within 1 YEAR of entry. Must show fear of persecution based on protected ground.',
          timeline: 'Varies widely - months to years due to backlog',
          cost: '$100 filing fee (new 2025)'
        },
        {
          title: 'Return Home and Apply for Different Visa',
          description: 'The safest option if you want to come back legally. Apply for the appropriate visa from Haiti.',
          eligibility: 'Depends on visa type (work, student, family)',
          timeline: 'Varies by visa type',
          cost: 'Varies'
        }
      ],
      stepByStep: [
        { step: 1, action: 'Check your I-94 expiration date NOW', details: 'Go to i94.cbp.dhs.gov and look up your record. This is your deadline.' },
        { step: 2, action: 'Do NOT work under any circumstances', details: 'Working on a tourist visa is illegal and will result in deportation and bars from returning.' },
        { step: 3, action: 'If you want to extend your stay', details: 'File Form I-539 BEFORE your I-94 expires. Extensions are granted for up to 6 more months but are discretionary.' },
        { step: 4, action: 'Consult an attorney if you want to change status', details: 'Changing from tourist to another status is complex. Get professional help.' },
        { step: 5, action: 'If your I-94 already expired', details: 'Consult an attorney IMMEDIATELY. You may have limited options, but acting quickly is important.' }
      ],
      requirements: [
        'Valid passport',
        'I-94 record (from i94.cbp.dhs.gov)',
        'Proof of ties to Haiti (property, family, job) - needed for extensions',
        'Financial documentation showing you can support yourself',
        'Proof of temporary intent (return ticket, etc.)',
        'Any change of circumstances documentation'
      ]
    },
    ht: {
      whatThisMeans: 'Ou te antre Etazini sou yon viza vizitè B-1/B-2. Viza sa a se pou touris, vizite fanmi, oswa reyinyon biznis sèlman. Ou PA KA travay sou viza sa a. I-94 ou montre peryòd sejou otorize ou (tipikman 6 mwa maksimòm). Depase tan gen konsekans grav.',
      criticalWarning: 'AVÈTISMAN: Depase viza ou plis pase 180 jou bloke ou pou retounen Etazini pou 3 ane. Depase plis pase 1 ane bloke ou pou 10 ane.',
      availableOptions: [
        {
          title: 'Chanje Estati pou Etidyan (F-1)',
          description: 'Si ou vle etidye nan Etazini, ou ka aplike pou chanje estati ou nan viza etidyan F-1 pandan ou nan peyi a.',
          eligibility: 'Dwe aksepte pa yon lekòl SEVP-sètifye, pwouve kapasite finansye pou peye ekolaj, kenbe rezidans aletranje (teknikman)',
          timeline: 'Tretman: 2-4 mwa. Dwe aplike ANVAN I-94 ou ekspire.',
          cost: '$370 (I-539) + $350 frè SEVIS + pri ekolaj'
        },
        {
          title: 'Estati Pwoteksyon Tanporè (TPS)',
          description: 'KRITIK: TPS pou Ayiti ap FINI 3 Fevriye 2026. Menm si ou kalifye, sa a ap fini.',
          eligibility: 'Dwe te rete kontinyèlman nan Etazini depi 3 Jen 2024, epi prezan kontinyèlman depi 4 Out 2024',
          timeline: 'Pwogram fini 3 Fev 2026',
          cost: '$500 aplikasyon + $30 biyometrik + $410 EAD (frè H.R. 1 - pa ka anile)'
        },
        {
          title: 'Azil (si elijib)',
          description: 'Si ou devlope yon laperèz pou retounen Ayiti akòz pèsekisyon, ou ka aplike pou azil.',
          eligibility: 'Dwe depoze nan 1 ANE apre antre. Dwe montre laperèz pèsekisyon ki baze sou yon rezon pwoteje.',
          timeline: 'Varye anpil - mwa a ane akòz reta',
          cost: '$100 frè depo (nouvo 2025)'
        },
        {
          title: 'Retounen Lakay epi Aplike pou Lòt Viza',
          description: 'Opsyon ki pi an sekirite si ou vle retounen legalman. Aplike pou viza apwopriye a depi Ayiti.',
          eligibility: 'Depann de tip viza (travay, etidyan, fanmi)',
          timeline: 'Varye pa tip viza',
          cost: 'Varye'
        }
      ],
      stepByStep: [
        { step: 1, action: 'Tcheke dat ekspirasyon I-94 ou KOUNYE A', details: 'Ale nan i94.cbp.dhs.gov epi chèche dosye ou. Sa a se dat limit ou.' },
        { step: 2, action: 'PA travay nan okenn sikonstans', details: 'Travay sou viza touris ilegal epi ap lakòz depòtasyon ak entèdiksyon pou retounen.' },
        { step: 3, action: 'Si ou vle pwolonje sejou ou', details: 'Depoze Fòm I-539 ANVAN I-94 ou ekspire. Ekstansyon yo akòde pou jiska 6 mwa anplis men yo diskresyonè.' },
        { step: 4, action: 'Konsilte yon avoka si ou vle chanje estati', details: 'Chanje soti nan touris pou ale nan yon lòt estati konplike. Jwenn èd pwofesyonèl.' },
        { step: 5, action: 'Si I-94 ou deja ekspire', details: 'Konsilte yon avoka IMEDYATMAN. Ou ka gen opsyon limite, men aji vit enpòtan.' }
      ],
      requirements: [
        'Paspo valab',
        'Dosye I-94 (soti nan i94.cbp.dhs.gov)',
        'Prèv lyen ak Ayiti (pwopriyete, fanmi, travay) - nesesè pou ekstansyon',
        'Dokimantasyon finansye ki montre ou ka sipòte tèt ou',
        'Prèv entansyon tanporè (tikè retou, elatriye)',
        'Nenpòt dokimantasyon chanjman sikonstans'
      ]
    }
  },
  student: {
    en: {
      whatThisMeans: 'You are in the US on an F-1 student visa. You must maintain full-time enrollment and keep your I-20 valid. You can work on-campus up to 20 hours/week during school, full-time during breaks. Off-campus work requires authorization.',
      criticalWarning: null,
      availableOptions: [
        {
          title: 'Optional Practical Training (OPT)',
          description: 'Work authorization for 12 months after graduation in your field of study. STEM majors can get 24-month extension (36 months total).',
          eligibility: 'Must have been in F-1 status for at least one academic year. Must apply 90 days before graduation to 60 days after.',
          timeline: 'Apply early! Processing takes 3-5 months. USCIS processes EADs for students in less than 30 days now, but apply with buffer time.',
          cost: '$410 (I-765 EAD application)'
        },
        {
          title: 'H-1B Work Visa (Employer Sponsored)',
          description: 'Specialty occupation visa for professional jobs. Requires employer sponsorship and lottery selection.',
          eligibility: 'Bachelor degree or higher required. Job must require specialized knowledge. Employer must file.',
          timeline: 'Lottery registration: March. If selected, visa starts October 1. Processing: 4-8 months (15 days with $2,805 premium processing).',
          cost: 'Employer typically pays: $1,710+ base fees. NEW: $100,000 additional fee (Sept 2025-Sept 2026)'
        },
        {
          title: 'Curricular Practical Training (CPT)',
          description: 'Work authorization while still in school if work is part of curriculum (internship, co-op).',
          eligibility: 'Must be enrolled full-time for one academic year. Work must be required or integral to program.',
          timeline: 'School DSO approves. Can start immediately after approval.',
          cost: 'No USCIS fee, but school may charge processing fee'
        },
        {
          title: 'Employment-Based Green Card',
          description: 'Permanent residency through employer sponsorship. Long process but leads to citizenship.',
          eligibility: 'Employer must sponsor, show no qualified US workers available (PERM process)',
          timeline: 'PERM: ~16 months. I-140: 6-8 months. I-485: 8-20 months. Total: 3-7+ years',
          cost: '$10,000-15,000+ (employer often pays most)'
        }
      ],
      stepByStep: [
        { step: 1, action: 'Maintain your F-1 status', details: 'Keep full-time enrollment, valid I-20, report address changes to school within 10 days.' },
        { step: 2, action: 'Plan OPT application early', details: 'Talk to your DSO (Designated School Official) 90 days before graduation. They must recommend OPT in SEVIS before you can apply.' },
        { step: 3, action: 'Start job searching before graduation', details: 'OPT has 90-day unemployment limit. Exceeding this ends your status.' },
        { step: 4, action: 'Understand the H-1B timeline', details: 'Registration is in March, 1+ year before you could start the job. Plan ahead.' },
        { step: 5, action: 'Cap-Gap protection', details: 'If on OPT and H-1B pending, your OPT/F-1 is extended until April 1 of the next year.' }
      ],
      requirements: [
        'Valid passport (at least 6 months validity)',
        'I-20 signed by DSO within last year',
        'Proof of full-time enrollment',
        'I-94 record',
        'Academic transcripts',
        'Job offer letter (for OPT/CPT/H-1B)',
        'Two passport photos (2x2 inches)'
      ]
    },
    ht: {
      whatThisMeans: 'Ou nan Etazini sou yon viza etidyan F-1. Ou dwe kenbe enskripsyon a tan plen epi kenbe I-20 ou valab. Ou ka travay sou kanpis jiska 20 èdtan/semèn pandan lekòl, tan plen pandan vakans. Travay deyò kanpis mande otorizasyon.',
      criticalWarning: null,
      availableOptions: [
        {
          title: 'Fòmasyon Pratik Opsyonèl (OPT)',
          description: 'Otorizasyon travay pou 12 mwa apre gradyasyon nan domèn etid ou. Majè STEM ka jwenn ekstansyon 24 mwa (36 mwa total).',
          eligibility: 'Dwe te nan estati F-1 pou omwen yon ane akademik. Dwe aplike 90 jou anvan gradyasyon jiska 60 jou apre.',
          timeline: 'Aplike bonè! Tretman pran 3-5 mwa. USCIS trete EAD pou etidyan nan mwens pase 30 jou kounye a, men aplike ak tan anplis.',
          cost: '$410 (aplikasyon EAD I-765)'
        },
        {
          title: 'Viza Travay H-1B (Patwone pa Anplwayè)',
          description: 'Viza okipasyon espesyalize pou travay pwofesyonèl. Mande patwonaj anplwayè ak seleksyon lotri.',
          eligibility: 'Diplòm bakaloreya oswa pi wo obligatwa. Travay dwe mande konesans espesyalize. Anplwayè dwe depoze.',
          timeline: 'Enskripsyon lotri: Mas. Si chwazi, viza kòmanse 1ye Oktòb. Tretman: 4-8 mwa (15 jou avèk tretman premium $2,805).',
          cost: 'Anplwayè tipikman peye: $1,710+ frè debaz. NOUVO: $100,000 frè adisyonèl (Sept 2025-Sept 2026)'
        },
        {
          title: 'Fòmasyon Pratik Kourikoulè (CPT)',
          description: 'Otorizasyon travay pandan ou toujou nan lekòl si travay la se yon pati nan kourikoulòm (estaj, co-op).',
          eligibility: 'Dwe enskri tan plen pou yon ane akademik. Travay la dwe obligatwa oswa entegral nan pwogram nan.',
          timeline: 'DSO lekòl apwouve. Ka kòmanse imedyatman apre apwobasyon.',
          cost: 'Pa gen frè USCIS, men lekòl ka chaje frè tretman'
        },
        {
          title: 'Kat Vèt Ki Baze Sou Anplwayman',
          description: 'Rezidans pèmanan atravè patwonaj anplwayè. Pwosesis long men mennen nan sitwayènte.',
          eligibility: 'Anplwayè dwe patwone, montre pa gen travayè ameriken kalifye ki disponib (pwosesis PERM)',
          timeline: 'PERM: ~16 mwa. I-140: 6-8 mwa. I-485: 8-20 mwa. Total: 3-7+ ane',
          cost: '$10,000-15,000+ (anplwayè souvan peye pifò)'
        }
      ],
      stepByStep: [
        { step: 1, action: 'Kenbe estati F-1 ou', details: 'Kenbe enskripsyon tan plen, I-20 valab, rapòte chanjman adrès bay lekòl nan 10 jou.' },
        { step: 2, action: 'Planifye aplikasyon OPT bonè', details: 'Pale ak DSO ou (Ofisye Lekòl Deziyen) 90 jou anvan gradyasyon. Yo dwe rekòmande OPT nan SEVIS anvan ou ka aplike.' },
        { step: 3, action: 'Kòmanse chèche travay anvan gradyasyon', details: 'OPT gen limit chomaj 90 jou. Depase sa a fini estati ou.' },
        { step: 4, action: 'Konprann kalandriye H-1B la', details: 'Enskripsyon se nan Mas, 1+ ane anvan ou ta ka kòmanse travay la. Planifye alavans.' },
        { step: 5, action: 'Pwoteksyon Cap-Gap', details: 'Si sou OPT epi H-1B ap tann, OPT/F-1 ou pwolonje jiska 1ye Avril ane pwochen.' }
      ],
      requirements: [
        'Paspo valab (omwen 6 mwa validite)',
        'I-20 siyen pa DSO nan dènye ane',
        'Prèv enskripsyon tan plen',
        'Dosye I-94',
        'Relve akademik',
        'Lèt òf travay (pou OPT/CPT/H-1B)',
        'De foto paspo (2x2 pous)'
      ]
    }
  },
  work: {
    en: {
      whatThisMeans: 'You have a work visa (H-1B, L-1, O-1, etc.) allowing you to work for a specific employer in the US. Your status is tied to your employer. If you lose your job, you have a 60-day grace period to find a new sponsor, change status, or leave.',
      criticalWarning: 'If you are laid off: You have only 60 DAYS to find a new employer to transfer your H-1B, change to another status, or depart the US. Act immediately.',
      availableOptions: [
        {
          title: 'Employment-Based Green Card (EB-2, EB-3)',
          description: 'Permanent residency through your employer. Most common path for H-1B holders.',
          eligibility: 'Employer must sponsor. EB-2: Advanced degree or exceptional ability. EB-3: Bachelor degree or skilled worker.',
          timeline: 'PERM Labor Certification: ~16 months (483 days current). I-140: 6-8 months (15 days premium). I-485: 8-20 months. WARNING: India/China backlog is 10+ years.',
          cost: 'Total $10,000-20,000+. PERM ads ~$3,000-5,000. I-140: $715 (+$2,805 premium). I-485: $1,225 + $85 biometrics per person.'
        },
        {
          title: 'H-1B Extension',
          description: 'H-1B is valid for 3 years, extendable to 6 years total. Beyond 6 years possible if green card pending.',
          eligibility: 'Same employer or new employer can file. Must maintain specialty occupation.',
          timeline: 'File up to 6 months before expiration. Processing: 4-8 months regular, 15 days premium ($2,805).',
          cost: '$1,710+ base fees. NEW: $100,000 fee for new H-1B applications Sept 2025-2026 (not extensions).'
        },
        {
          title: 'H-1B Transfer (Change Employers)',
          description: 'You can change employers while on H-1B. You can start working for new employer once H-1B transfer is filed.',
          eligibility: 'New employer files new H-1B petition for you. Must be in valid H-1B status.',
          timeline: 'Can start work when USCIS receives petition (with receipt notice). Full approval: 4-8 months.',
          cost: 'Same as new H-1B: $1,710+ (employer pays). Premium processing available.'
        },
        {
          title: 'Change to Different Visa Status',
          description: 'If H-1B is not working out, you might change to O-1 (extraordinary ability), L-1 (intracompany transfer if applicable), or return to F-1.',
          eligibility: 'Depends on visa type. O-1 requires extraordinary ability evidence.',
          timeline: 'Varies by visa type',
          cost: 'Varies'
        }
      ],
      stepByStep: [
        { step: 1, action: 'Start green card process early', details: 'Tell your employer you want to pursue a green card. PERM alone takes 16+ months. Don\'t wait.' },
        { step: 2, action: 'Track your H-1B expiration', details: 'Know exactly when your status expires. File extensions 4-6 months before expiration.' },
        { step: 3, action: 'Understand portability rules', details: 'If I-140 approved and I-485 pending 180+ days, you can change employers without losing green card process.' },
        { step: 4, action: 'If laid off, act within days', details: 'Start reaching out to immigration attorneys and potential employers immediately. 60 days goes fast.' },
        { step: 5, action: 'Keep all documentation', details: 'Pay stubs, approval notices, I-94, passport - you need these for every filing.' }
      ],
      requirements: [
        'Valid passport (6+ months validity recommended)',
        'I-797 Approval Notice',
        'I-94 record',
        'Pay stubs and employment verification letter',
        'All previous H-1B approval notices',
        'Educational credentials (degree, transcripts)',
        'Credential evaluation if foreign degree'
      ]
    },
    ht: {
      whatThisMeans: 'Ou gen yon viza travay (H-1B, L-1, O-1, elatriye) ki pèmèt ou travay pou yon anplwayè espesifik nan Etazini. Estati ou mare ak anplwayè ou. Si ou pèdi travay ou, ou gen yon peryòd gras 60 jou pou jwenn yon nouvo garanti, chanje estati, oswa kite.',
      criticalWarning: 'Si yo revoke ou: Ou gen sèlman 60 JOU pou jwenn yon nouvo anplwayè pou transfere H-1B ou, chanje nan yon lòt estati, oswa kite Etazini. Aji imedyatman.',
      availableOptions: [
        {
          title: 'Kat Vèt Ki Baze Sou Anplwayman (EB-2, EB-3)',
          description: 'Rezidans pèmanan atravè anplwayè ou. Chemen ki pi komen pou moun ki gen H-1B.',
          eligibility: 'Anplwayè dwe patwone. EB-2: Diplòm avanse oswa kapasite eksepsyonèl. EB-3: Diplòm bakaloreya oswa travayè kalifye.',
          timeline: 'Sètifikasyon Travay PERM: ~16 mwa (483 jou aktyèl). I-140: 6-8 mwa (15 jou premium). I-485: 8-20 mwa. AVÈTISMAN: Reta End/Lachin se 10+ ane.',
          cost: 'Total $10,000-20,000+. Piblisite PERM ~$3,000-5,000. I-140: $715 (+$2,805 premium). I-485: $1,225 + $85 biyometrik pa moun.'
        },
        {
          title: 'Ekstansyon H-1B',
          description: 'H-1B valab pou 3 ane, ka pwolonje jiska 6 ane total. Pi lwen pase 6 ane posib si kat vèt ap tann.',
          eligibility: 'Menm anplwayè oswa nouvo anplwayè ka depoze. Dwe kenbe okipasyon espesyalize.',
          timeline: 'Depoze jiska 6 mwa anvan ekspirasyon. Tretman: 4-8 mwa regilye, 15 jou premium ($2,805).',
          cost: '$1,710+ frè debaz. NOUVO: $100,000 frè pou nouvo aplikasyon H-1B Sept 2025-2026 (pa ekstansyon).'
        },
        {
          title: 'Transfè H-1B (Chanje Anplwayè)',
          description: 'Ou ka chanje anplwayè pandan ou sou H-1B. Ou ka kòmanse travay pou nouvo anplwayè yon fwa transfè H-1B depoze.',
          eligibility: 'Nouvo anplwayè depoze nouvo petisyon H-1B pou ou. Dwe nan estati H-1B valab.',
          timeline: 'Ka kòmanse travay lè USCIS resevwa petisyon (avèk avi resi). Apwobasyon konplè: 4-8 mwa.',
          cost: 'Menm ak nouvo H-1B: $1,710+ (anplwayè peye). Tretman premium disponib.'
        },
        {
          title: 'Chanje pou Lòt Estati Viza',
          description: 'Si H-1B pa mache, ou ta ka chanje pou O-1 (kapasite ekstraòdinè), L-1 (transfè intra-konpayi si aplikab), oswa retounen nan F-1.',
          eligibility: 'Depann de tip viza. O-1 mande prèv kapasite ekstraòdinè.',
          timeline: 'Varye pa tip viza',
          cost: 'Varye'
        }
      ],
      stepByStep: [
        { step: 1, action: 'Kòmanse pwosesis kat vèt bonè', details: 'Di anplwayè ou ou vle pousuiv yon kat vèt. PERM sèlman pran 16+ mwa. Pa tann.' },
        { step: 2, action: 'Swiv ekspirasyon H-1B ou', details: 'Konnen egzakteman ki lè estati ou ekspire. Depoze ekstansyon 4-6 mwa anvan ekspirasyon.' },
        { step: 3, action: 'Konprann règ pòtabilite', details: 'Si I-140 apwouve epi I-485 ap tann 180+ jou, ou ka chanje anplwayè san pèdi pwosesis kat vèt.' },
        { step: 4, action: 'Si yo revoke ou, aji nan jou', details: 'Kòmanse kontakte avoka imigrasyon ak anplwayè potansyèl imedyatman. 60 jou ale vit.' },
        { step: 5, action: 'Kenbe tout dokimantasyon', details: 'Souch peman, avi apwobasyon, I-94, paspo - ou bezwen sa yo pou chak depo.' }
      ],
      requirements: [
        'Paspo valab (6+ mwa validite rekòmande)',
        'Avi Apwobasyon I-797',
        'Dosye I-94',
        'Souch peman ak lèt verifikasyon anplwa',
        'Tout avi apwobasyon H-1B anvan yo',
        'Kalifikasyon edikasyonèl (diplòm, relve)',
        'Evalyasyon kalifikasyon si diplòm etranje'
      ]
    }
  },
  family: {
    en: {
      whatThisMeans: 'You are seeking immigration status through a family relationship or marriage. Family-based immigration is one of the primary ways to obtain a green card in the United States. Your path depends on your relationship to a US citizen or permanent resident.',
      criticalWarning: null,
      availableOptions: [
        {
          title: 'Marriage to US Citizen (Immediate Relative)',
          description: 'Spouses of US citizens are "immediate relatives" with no visa wait time. This is one of the fastest paths to a green card.',
          eligibility: 'Must be legally married to a US citizen. Marriage must be genuine (bona fide), not entered for immigration purposes.',
          timeline: 'If in US legally: 10-23 months for green card. If abroad: 11-15 months for immigrant visa. Conditional 2-year green card if married less than 2 years.',
          cost: '$535 (I-130) + $1,225 (I-485) + $85 biometrics = ~$1,845 if adjusting in US'
        },
        {
          title: 'Marriage to Green Card Holder (F2A)',
          description: 'Spouses of permanent residents fall under Family Preference category F2A. There is a wait time due to visa limits.',
          eligibility: 'Must be legally married to a lawful permanent resident (green card holder).',
          timeline: 'Currently 2-3 years wait for visa availability, then additional processing time.',
          cost: '$535 (I-130) initially, then $1,225+ when visa becomes available'
        },
        {
          title: 'K-1 Fiancé(e) Visa',
          description: 'For couples where one is a US citizen engaged to a foreign national. Must marry within 90 days of entry to the US.',
          eligibility: 'US citizen petitioner. Must have met in person within past 2 years. Must intend to marry within 90 days of K-1 holder entering US.',
          timeline: 'K-1 processing: 10-14 months. After entry: 90 days to marry, then file for adjustment.',
          cost: '$535 (I-129F) + $265 visa fee + $1,225 (I-485 after marriage) = ~$2,000+'
        },
        {
          title: 'Parent of US Citizen (Immediate Relative)',
          description: 'Parents of US citizens who are 21 or older are immediate relatives with no wait time.',
          eligibility: 'Your US citizen child must be at least 21 years old.',
          timeline: '10-23 months if adjusting in US. 11-15 months if through consular processing.',
          cost: '$535 (I-130) + $1,225 (I-485) + $85 biometrics = ~$1,845'
        },
        {
          title: 'Child of US Citizen (Immediate Relative)',
          description: 'Unmarried children under 21 of US citizens are immediate relatives.',
          eligibility: 'Must be unmarried and under 21. Includes biological, step, and adopted children.',
          timeline: '10-23 months for green card.',
          cost: '$535 (I-130) + $1,225 (I-485) + $85 biometrics = ~$1,845'
        },
        {
          title: 'Siblings & Adult Children (Family Preference)',
          description: 'Brothers/sisters and married/adult children of US citizens have longer waits.',
          eligibility: 'F1: Unmarried adult children of USC. F3: Married children of USC. F4: Siblings of USC (must be 21+).',
          timeline: 'WARNING: F4 (siblings) for most countries: 15-23 YEARS wait. F1/F3: 7-15 years.',
          cost: '$535 (I-130), then fees when visa available (years later)'
        }
      ],
      stepByStep: [
        { step: 1, action: 'Determine your relationship category', details: 'Immediate relatives (spouse, parent, unmarried child under 21 of USC) have no wait. Others face years of waiting.' },
        { step: 2, action: 'Gather evidence of relationship', details: 'Marriage certificate, birth certificates, photos together, joint finances, shared address proof.' },
        { step: 3, action: 'File Form I-130 (Petition for Alien Relative)', details: 'The US citizen or green card holder files this petition to establish the qualifying relationship.' },
        { step: 4, action: 'Wait for I-130 approval', details: 'USCIS reviews and approves the petition. For immediate relatives, can file I-485 concurrently.' },
        { step: 5, action: 'File I-485 or attend consular interview', details: 'If in US legally: adjust status with I-485. If abroad: attend visa interview at US consulate.' },
        { step: 6, action: 'Attend biometrics and interview', details: 'USCIS will schedule biometrics. Marriage-based cases typically require an interview.' }
      ],
      requirements: [
        'Marriage certificate (if married)',
        'Birth certificates showing relationship',
        'Passport and passport photos (2x2)',
        'I-94 arrival record',
        'Evidence of bona fide marriage (photos, joint accounts, leases)',
        'Affidavit of Support (I-864)',
        'Tax returns of petitioner (3 years)',
        'Medical examination (I-693)',
        'Police clearances'
      ]
    },
    ht: {
      whatThisMeans: 'Ou ap chèche estati imigrasyon atravè yon relasyon fanmi oswa maryaj. Imigrasyon ki baze sou fanmi se youn nan prensipal fason pou jwenn yon kat vèt nan Etazini. Chemen ou depann de relasyon ou ak yon sitwayen ameriken oswa rezidan pèmanan.',
      criticalWarning: null,
      availableOptions: [
        {
          title: 'Maryaj ak Sitwayen Ameriken (Fanmi Imedya)',
          description: 'Mari/madanm sitwayen ameriken yo se "fanmi imedya" san tan tann pou viza. Sa a se youn nan chemen ki pi rapid pou yon kat vèt.',
          eligibility: 'Dwe marye legalman ak yon sitwayen ameriken. Maryaj la dwe otantik (bona fide), pa fèt pou rezon imigrasyon.',
          timeline: 'Si nan Etazini legalman: 10-23 mwa pou kat vèt. Si aletranje: 11-15 mwa pou viza imigran. Kat vèt kondisyonèl 2 ane si marye mwens pase 2 ane.',
          cost: '$535 (I-130) + $1,225 (I-485) + $85 biyometrik = ~$1,845 si ajiste nan Etazini'
        },
        {
          title: 'Maryaj ak Moun ki gen Kat Vèt (F2A)',
          description: 'Mari/madanm rezidan pèmanan yo tonbe anba kategori Preferans Fanmi F2A. Gen tan tann akòz limit viza.',
          eligibility: 'Dwe marye legalman ak yon rezidan pèmanan legal (moun ki gen kat vèt).',
          timeline: 'Kounye a 2-3 ane tann pou viza disponib, answit tan tretman adisyonèl.',
          cost: '$535 (I-130) an premye, answit $1,225+ lè viza vin disponib'
        },
        {
          title: 'Viza Fiyanse K-1',
          description: 'Pou koup kote youn se sitwayen ameriken ki angaje ak yon etranje. Dwe marye nan 90 jou apre antre Etazini.',
          eligibility: 'Petisyonè sitwayen ameriken. Dwe te rankontre an pèsòn nan 2 dènye ane. Dwe gen entansyon marye nan 90 jou apre moun ki gen K-1 la antre Etazini.',
          timeline: 'Tretman K-1: 10-14 mwa. Apre antre: 90 jou pou marye, answit depoze pou ajisteman.',
          cost: '$535 (I-129F) + $265 frè viza + $1,225 (I-485 apre maryaj) = ~$2,000+'
        },
        {
          title: 'Paran Sitwayen Ameriken (Fanmi Imedya)',
          description: 'Paran sitwayen ameriken ki gen 21 an oswa plis se fanmi imedya san tan tann.',
          eligibility: 'Pitit sitwayen ameriken ou dwe gen omwen 21 an.',
          timeline: '10-23 mwa si ajiste nan Etazini. 11-15 mwa si atravè tretman konsilè.',
          cost: '$535 (I-130) + $1,225 (I-485) + $85 biyometrik = ~$1,845'
        },
        {
          title: 'Pitit Sitwayen Ameriken (Fanmi Imedya)',
          description: 'Timoun ki poko marye ki gen mwens pase 21 an ki gen paran sitwayen ameriken se fanmi imedya.',
          eligibility: 'Dwe poko marye epi gen mwens pase 21 an. Gen ladan timoun byolojik, bòpè/bèlmè, ak adopte.',
          timeline: '10-23 mwa pou kat vèt.',
          cost: '$535 (I-130) + $1,225 (I-485) + $85 biyometrik = ~$1,845'
        },
        {
          title: 'Frè/Sè & Pitit Adilt (Preferans Fanmi)',
          description: 'Frè/sè ak timoun marye/adilt sitwayen ameriken gen tan tann pi long.',
          eligibility: 'F1: Pitit adilt ki poko marye USC. F3: Pitit marye USC. F4: Frè/sè USC (dwe gen 21+).',
          timeline: 'AVÈTISMAN: F4 (frè/sè) pou pifò peyi: 15-23 ANE tann. F1/F3: 7-15 ane.',
          cost: '$535 (I-130), answit frè lè viza disponib (ane apre)'
        }
      ],
      stepByStep: [
        { step: 1, action: 'Detèmine kategori relasyon ou', details: 'Fanmi imedya (mari/madanm, paran, timoun ki poko marye ki gen mwens pase 21 an USC) pa gen tann. Lòt yo fè fas a ane tann.' },
        { step: 2, action: 'Rasanble prèv relasyon', details: 'Sètifika maryaj, sètifika nesans, foto ansanm, finans konjwen, prèv adrès pataje.' },
        { step: 3, action: 'Depoze Fòm I-130 (Petisyon pou Fanmi Etranje)', details: 'Sitwayen ameriken oswa moun ki gen kat vèt la depoze petisyon sa a pou etabli relasyon ki kalifye.' },
        { step: 4, action: 'Tann apwobasyon I-130', details: 'USCIS revize epi apwouve petisyon an. Pou fanmi imedya, ka depoze I-485 an menm tan.' },
        { step: 5, action: 'Depoze I-485 oswa asiste entèvyou konsilè', details: 'Si nan Etazini legalman: ajiste estati ak I-485. Si aletranje: asiste entèvyou viza nan konsila ameriken.' },
        { step: 6, action: 'Asiste biyometrik ak entèvyou', details: 'USCIS pral pwograme biyometrik. Ka ki baze sou maryaj tipikman mande yon entèvyou.' }
      ],
      requirements: [
        'Sètifika maryaj (si marye)',
        'Sètifika nesans ki montre relasyon',
        'Paspo ak foto paspo (2x2)',
        'Dosye arive I-94',
        'Prèv maryaj otantik (foto, kont konjwen, kontra lwaye)',
        'Afidavit Sipò (I-864)',
        'Deklarasyon taks petisyonè (3 ane)',
        'Egzamen medikal (I-693)',
        'Otorisasyon polis'
      ]
    }
  },
  tps: {
    en: {
      whatThisMeans: 'You have Temporary Protected Status (TPS) for Haiti. TPS has allowed you to live and work legally in the US temporarily due to conditions in Haiti.',
      criticalWarning: '⚠️ CRITICAL WARNING: TPS FOR HAITI IS BEING TERMINATED. All TPS benefits end on FEBRUARY 3, 2026. This is NOT a renewal - the program is ENDING. You MUST find another immigration status before this date or you will be subject to removal.',
      availableOptions: [
        {
          title: 'URGENT: Find Alternative Status NOW',
          description: 'With TPS ending Feb 3, 2026, you need another legal status. Consult an immigration attorney IMMEDIATELY to explore options.',
          eligibility: 'Depends on your individual circumstances',
          timeline: 'YOU HAVE UNTIL FEBRUARY 3, 2026',
          cost: 'Varies by option'
        },
        {
          title: 'Family-Based Green Card',
          description: 'If you have a US citizen or green card holder spouse, parent, or adult child, they may petition for you.',
          eligibility: 'Immediate relatives of US citizens (spouse, parent, child under 21) have no wait. Others wait years.',
          timeline: 'Immediate relatives: 10-23 months. Married children of citizens: 7-8 years. Siblings: 14-24 years.',
          cost: '$535 (I-130) + $1,225 (I-485) + $85 biometrics'
        },
        {
          title: 'Asylum',
          description: 'If you fear persecution in Haiti and can demonstrate a well-founded fear, you may apply for asylum. TPS "stops the clock" on the 1-year deadline.',
          eligibility: 'Must show persecution based on race, religion, nationality, political opinion, or particular social group',
          timeline: 'Varies - months to years due to backlog',
          cost: '$100 filing fee + potential annual fees'
        },
        {
          title: 'Employment-Based Options',
          description: 'If your employer will sponsor you, you may pursue an employment-based green card or work visa.',
          eligibility: 'Depends on job, qualifications, employer willingness',
          timeline: 'H-1B: Must win lottery, then 4-8 months. EB green card: 3-10+ years',
          cost: 'Varies significantly'
        },
        {
          title: 'U-Visa (Crime Victims)',
          description: 'If you were a victim of certain crimes in the US and helped law enforcement, you may qualify for a U-visa.',
          eligibility: 'Victim of qualifying crime, suffered abuse, helpful to law enforcement, admissible to US',
          timeline: 'Currently 5+ year backlog for U-visas',
          cost: 'No filing fee'
        }
      ],
      stepByStep: [
        { step: 1, action: 'CONSULT AN IMMIGRATION ATTORNEY NOW', details: 'This is urgent. TPS is ending. You need professional help to evaluate all your options. Many organizations offer free consultations.' },
        { step: 2, action: 'Gather all your documents', details: 'TPS approval notices, EADs, passports, tax returns, pay stubs, anything proving your presence and good standing in the US.' },
        { step: 3, action: 'Evaluate family connections', details: 'Do you have any US citizen or permanent resident family members who could petition for you? Spouse? Parent? Adult child?' },
        { step: 4, action: 'Consider asylum carefully', details: 'If conditions in Haiti genuinely make you fear return, asylum may be an option. But you need a lawyer to evaluate this.' },
        { step: 5, action: 'Do NOT wait until 2026', details: 'Most immigration processes take months or years. If you wait until close to Feb 3, 2026, you may run out of time.' },
        { step: 6, action: 'Keep working legally while you can', details: 'Your EAD is valid until Feb 3, 2026. Keep working, saving money, and documenting your presence.' }
      ],
      requirements: [
        'Current TPS approval notice (I-797)',
        'Valid Employment Authorization Document (EAD)',
        'Passport (or apply for renewal)',
        'All previous TPS approval notices',
        'Tax returns (prove good standing)',
        'Proof of continuous residence and presence',
        'Birth certificates (yours and family members)',
        'Marriage certificate (if applicable)',
        'Evidence for alternative status applications'
      ],
      haitiSpecific: '⚠️ HAITI TPS IS ENDING FEBRUARY 3, 2026. Secretary of Homeland Security Kristi Noem has terminated TPS for Haiti. EADs are valid until Feb 3, 2026 but will NOT be extended further. You must find alternative legal status or face removal proceedings after this date.'
    },
    ht: {
      whatThisMeans: 'Ou gen Estati Pwoteksyon Tanporè (TPS) pou Ayiti. TPS te pèmèt ou viv epi travay legalman nan Etazini tanporèman akòz kondisyon nan Ayiti.',
      criticalWarning: '⚠️ AVÈTISMAN KRITIK: TPS POU AYITI AP FINI. Tout benefis TPS fini 3 FEVRIYE 2026. Sa a pa yon renouvleman - pwogram nan ap FINI. Ou DWE jwenn yon lòt estati imigrasyon anvan dat sa a oswa ou pral sijè a retire.',
      availableOptions: [
        {
          title: 'IJAN: Jwenn Lòt Estati KOUNYE A',
          description: 'Avèk TPS ki fini 3 Fev 2026, ou bezwen yon lòt estati legal. Konsilte yon avoka imigrasyon IMEDYATMAN pou eksplore opsyon.',
          eligibility: 'Depann de sikonstans endividyèl ou',
          timeline: 'OU GEN JISKA 3 FEVRIYE 2026',
          cost: 'Varye pa opsyon'
        },
        {
          title: 'Kat Vèt Ki Baze Sou Fanmi',
          description: 'Si ou gen yon mari/madanm, paran, oswa pitit adilt ki sitwayen ameriken oswa ki gen kat vèt, yo ka petisyone pou ou.',
          eligibility: 'Fanmi imedya sitwayen ameriken (mari/madanm, paran, pitit ki gen mwens pase 21 an) pa gen tann. Lòt yo tann ane.',
          timeline: 'Fanmi imedya: 10-23 mwa. Pitit marye sitwayen: 7-8 ane. Frè/sè: 14-24 ane.',
          cost: '$535 (I-130) + $1,225 (I-485) + $85 biyometrik'
        },
        {
          title: 'Azil',
          description: 'Si ou pè pèsekisyon nan Ayiti epi ou ka demontre yon laperèz byen fonde, ou ka aplike pou azil. TPS "kanpe revèy la" sou dat limit 1 ane.',
          eligibility: 'Dwe montre pèsekisyon ki baze sou ras, relijyon, nasyonalite, opinyon politik, oswa gwoup sosyal patikilye',
          timeline: 'Varye - mwa a ane akòz reta',
          cost: '$100 frè depo + frè anyèl potansyèl'
        },
        {
          title: 'Opsyon Ki Baze Sou Anplwayman',
          description: 'Si anplwayè ou ap patwone ou, ou ka pousuiv yon kat vèt oswa viza travay ki baze sou anplwayman.',
          eligibility: 'Depann de travay, kalifikasyon, volonte anplwayè',
          timeline: 'H-1B: Dwe genyen lotri, answit 4-8 mwa. Kat vèt EB: 3-10+ ane',
          cost: 'Varye anpil'
        },
        {
          title: 'Viza U (Viktim Krim)',
          description: 'Si ou te viktim sèten krim nan Etazini epi ou te ede lapolis, ou ka kalifye pou yon viza U.',
          eligibility: 'Viktim krim ki kalifye, te soufri abi, itil pou lapolis, admisib nan Etazini',
          timeline: 'Kounye a 5+ ane reta pou viza U',
          cost: 'Pa gen frè depo'
        }
      ],
      stepByStep: [
        { step: 1, action: 'KONSILTE YON AVOKA IMIGRASYON KOUNYE A', details: 'Sa a ijan. TPS ap fini. Ou bezwen èd pwofesyonèl pou evalye tout opsyon ou. Anpil òganizasyon ofri konsiltasyon gratis.' },
        { step: 2, action: 'Rasanble tout dokiman ou', details: 'Avi apwobasyon TPS, EAD, paspo, deklarasyon taks, souch peman, nenpòt bagay ki pwouve prezans ou ak bon pozisyon nan Etazini.' },
        { step: 3, action: 'Evalye koneksyon fanmi', details: 'Èske ou gen nenpòt manm fanmi ki sitwayen ameriken oswa rezidan pèmanan ki ta ka petisyone pou ou? Mari/madanm? Paran? Pitit adilt?' },
        { step: 4, action: 'Konsidere azil avèk anpil atansyon', details: 'Si kondisyon nan Ayiti vrèman fè ou pè retounen, azil ka yon opsyon. Men ou bezwen yon avoka pou evalye sa.' },
        { step: 5, action: 'PA tann jiska 2026', details: 'Pifò pwosesis imigrasyon pran mwa oswa ane. Si ou tann jiska toupre 3 Fev 2026, ou ka manke tan.' },
        { step: 6, action: 'Kontinye travay legalman pandan ou kapab', details: 'EAD ou valab jiska 3 Fev 2026. Kontinye travay, ekonomize lajan, epi dokimante prezans ou.' }
      ],
      requirements: [
        'Avi apwobasyon TPS aktyèl (I-797)',
        'Dokiman Otorizasyon Travay (EAD) valab',
        'Paspo (oswa aplike pou renouvleman)',
        'Tout avi apwobasyon TPS anvan yo',
        'Deklarasyon taks (pwouve bon pozisyon)',
        'Prèv rezidans kontinyèl ak prezans',
        'Batistè (pa ou ak manm fanmi)',
        'Sètifika maryaj (si aplikab)',
        'Prèv pou aplikasyon estati altènatif'
      ],
      haitiSpecific: '⚠️ TPS AYITI AP FINI 3 FEVRIYE 2026. Sekretè Sekirite Nasyonal Kristi Noem te mete fen nan TPS pou Ayiti. EAD yo valab jiska 3 Fev 2026 men yo pa pral pwolonje ankò. Ou dwe jwenn estati legal altènatif oswa fè fas a pwosedi retire apre dat sa a.'
    }
  },
  chnv: {
    en: {
      whatThisMeans: 'You entered the United States through the CHNV (Cuba, Haiti, Nicaragua, Venezuela) Humanitarian Parole program with a US-based sponsor. This program allowed 2 years of parole status with work authorization.',
      criticalWarning: '🚨 URGENT: THE CHNV PROGRAM HAS BEEN TERMINATED. On June 12, 2025, DHS began sending termination notices to approximately 530,000 individuals. Your parole status and work authorization have been REVOKED IMMEDIATELY. You must seek alternative legal status NOW or face removal proceedings.',
      availableOptions: [
        {
          title: 'Asylum Application (URGENT)',
          description: 'If you fear persecution in Haiti based on race, religion, nationality, political opinion, or membership in a particular social group, apply for asylum IMMEDIATELY.',
          eligibility: 'Must demonstrate well-founded fear of persecution. Being from Haiti is now considered a "significant negative factor" by USCIS - strong evidence required.',
          timeline: 'File as soon as possible. The 1-year deadline from your entry date still applies.',
          cost: '$100 filing fee (cannot be waived under H.R. 1)'
        },
        {
          title: 'Family-Based Immigration',
          description: 'If you have immediate relatives who are US citizens (spouse, parent, or adult child over 21), they can petition for you.',
          eligibility: 'Immediate relatives of US citizens have no visa wait. Other family categories face multi-year backlogs.',
          timeline: 'Immediate relatives: 10-23 months. File I-130 petition immediately to establish priority date.',
          cost: '$535 (I-130) + $1,225 (I-485) + fees'
        },
        {
          title: 'Employment-Based Sponsorship',
          description: 'If you have specialized skills or a job offer, your employer may be able to sponsor you for a work visa or green card.',
          eligibility: 'Requires employer willing to sponsor. H-1B requires specialty occupation and bachelor\'s degree.',
          timeline: 'H-1B lottery in March. Employment green card: 2-10+ years depending on category.',
          cost: 'Employer typically pays filing fees'
        },
        {
          title: 'U-Visa (Crime Victim)',
          description: 'If you were a victim of certain crimes in the US and helped law enforcement, you may qualify.',
          eligibility: 'Must be victim of qualifying crime, suffered mental/physical abuse, have information about the crime, and law enforcement must certify cooperation.',
          timeline: 'Currently 5+ year backlog. Provides work permit while pending.',
          cost: 'No filing fee'
        },
        {
          title: 'VAWA (Violence Against Women Act)',
          description: 'If you experienced domestic violence from a US citizen or green card holder spouse/parent, you can self-petition.',
          eligibility: 'Must prove battery or extreme cruelty by USC or LPR spouse/parent. Self-petition - abuser is not notified.',
          timeline: '12-18 months for approval. Work permit available while pending.',
          cost: 'No filing fee'
        }
      ],
      stepByStep: [
        { step: 1, action: 'GET LEGAL HELP IMMEDIATELY', details: 'Find an immigration attorney NOW. Free help at justice.gov/eoir/find-legal-representation or through AILA (American Immigration Lawyers Association).' },
        { step: 2, action: 'Check your myUSCIS account', details: 'Look for any termination notices. Keep copies of everything. Document your presence in the US.' },
        { step: 3, action: 'Do NOT leave the United States', details: 'Leaving will trigger bars to re-entry. Do not travel internationally without attorney advice.' },
        { step: 4, action: 'Evaluate ALL options with attorney', details: 'Asylum, family petition, U-visa, VAWA, employment sponsorship - explore every possibility.' },
        { step: 5, action: 'File applications IMMEDIATELY', details: 'If you qualify for asylum or family-based petition, file now to establish a record and potential work authorization.' },
        { step: 6, action: 'Know your rights', details: 'Right to remain silent. Right to an attorney. Do not sign documents you don\'t understand. Do not open door without warrant.' }
      ],
      requirements: [
        'All CHNV parole documents (I-94, approval notice)',
        'Valid passport from Haiti',
        'Birth certificate',
        'Proof of continuous presence (bills, lease, employment records)',
        'Any documents supporting asylum claim (evidence of persecution/threats)',
        'Family documents (if applying through family)',
        'Two passport photos (2x2 inches)',
        'Police reports (if crime victim for U-visa)'
      ],
      haitiSpecific: '🚨 CHNV PROGRAM TERMINATED: The Supreme Court upheld DHS\'s termination on May 30, 2025. Work authorization revoked immediately. USCIS has stated that being from Haiti is a "significant negative factor" in immigration applications. This makes strong evidence and legal representation essential. Family Reunification Parole (HFRP) has also been terminated as of January 14, 2026.'
    },
    ht: {
      whatThisMeans: 'Ou te antre Etazini atravè pwogram CHNV (Kiba, Ayiti, Nikaragwa, Venezuela) Humanitarian Parole avèk yon garanti ki baze nan Etazini. Pwogram sa a te pèmèt 2 ane estati parole avèk otorizasyon travay.',
      criticalWarning: '🚨 IJAN: PWOGRAM CHNV TE FINI. Nan dat 12 Jen 2025, DHS te kòmanse voye avi revokasyon bay anviwon 530,000 moun. Estati parole ou ak otorizasyon travay ou te REVOKE IMEDYATMAN. Ou dwe chèche estati legal altènatif KOUNYE A oswa fè fas a pwosedi retire.',
      availableOptions: [
        {
          title: 'Aplikasyon Azil (IJAN)',
          description: 'Si ou pè pèsekisyon nan Ayiti ki baze sou ras, relijyon, nasyonalite, opinyon politik, oswa manm nan yon gwoup sosyal patikilye, aplike pou azil IMEDYATMAN.',
          eligibility: 'Dwe demontre laperèz byen fonde pou pèsekisyon. Soti Ayiti kounye a konsidere kòm "faktè negatif siyifikatif" pa USCIS - prèv solid obligatwa.',
          timeline: 'Depoze pi vit posib. Dat limit 1 ane apre dat antre ou toujou aplike.',
          cost: '$100 frè depo (pa ka anile anba H.R. 1)'
        },
        {
          title: 'Imigrasyon Ki Baze Sou Fanmi',
          description: 'Si ou gen fanmi pwòch ki sitwayen ameriken (mari/madanm, paran, oswa pitit adilt ki gen plis pase 21 an), yo ka petisyone pou ou.',
          eligibility: 'Fanmi imedya sitwayen ameriken pa gen tann viza. Lòt kategori fanmi fè fas a reta plizyè ane.',
          timeline: 'Fanmi imedya: 10-23 mwa. Depoze petisyon I-130 imedyatman pou etabli dat priyorite.',
          cost: '$535 (I-130) + $1,225 (I-485) + frè'
        },
        {
          title: 'Patwonaj Ki Baze Sou Travay',
          description: 'Si ou gen konpetans espesyalize oswa yon òf travay, anplwayè ou ka kapab patwone ou pou viza travay oswa kat vèt.',
          eligibility: 'Mande anplwayè ki vle patwone. H-1B mande okipasyon espesyalite ak diplòm bakaloreya.',
          timeline: 'Lotri H-1B nan Mas. Kat vèt anplwa: 2-10+ ane depann de kategori.',
          cost: 'Anplwayè tipikman peye frè depo'
        },
        {
          title: 'Viza U (Viktim Krim)',
          description: 'Si ou te viktim sèten krim nan Etazini epi ou te ede lapolis, ou ka kalifye.',
          eligibility: 'Dwe viktim krim ki kalifye, te soufri abi mantal/fizik, gen enfòmasyon sou krim nan, epi lapolis dwe sètifye kolaborasyon.',
          timeline: 'Aktyèlman 5+ ane reta. Bay pèmi travay pandan ap tann.',
          cost: 'Pa gen frè depo'
        },
        {
          title: 'VAWA (Lwa Vyolans Kont Fanm)',
          description: 'Si ou te fè eksperyans vyolans domestik nan men yon sitwayen ameriken oswa mari/madanm/paran ki gen kat vèt, ou ka oto-petisyone.',
          eligibility: 'Dwe pwouve bat oswa krayolte ekstrèm pa mari/madanm/paran USC oswa LPR. Oto-petisyon - abizè a pa notifye.',
          timeline: '12-18 mwa pou apwobasyon. Pèmi travay disponib pandan ap tann.',
          cost: 'Pa gen frè depo'
        }
      ],
      stepByStep: [
        { step: 1, action: 'JWENN ÈD LEGAL IMEDYATMAN', details: 'Jwenn yon avoka imigrasyon KOUNYE A. Èd gratis nan justice.gov/eoir/find-legal-representation oswa atravè AILA (American Immigration Lawyers Association).' },
        { step: 2, action: 'Tcheke kont myUSCIS ou', details: 'Gade pou nenpòt avi revokasyon. Kenbe kopi tout bagay. Dokimante prezans ou nan Etazini.' },
        { step: 3, action: 'PA kite Etazini', details: 'Kite ap deklanche entèdiksyon pou re-antre. Pa vwayaje entènasyonal san konsèy avoka.' },
        { step: 4, action: 'Evalye TOUT opsyon avèk avoka', details: 'Azil, petisyon fanmi, viza U, VAWA, patwonaj anplwa - eksplore chak posibilite.' },
        { step: 5, action: 'Depoze aplikasyon IMEDYATMAN', details: 'Si ou kalifye pou azil oswa petisyon ki baze sou fanmi, depoze kounye a pou etabli yon dosye ak otorizasyon travay potansyèl.' },
        { step: 6, action: 'Konnen dwa ou', details: 'Dwa pou rete an silans. Dwa a yon avoka. Pa siyen dokiman ou pa konprann. Pa louvri pòt san manda.' }
      ],
      requirements: [
        'Tout dokiman CHNV parole (I-94, avi apwobasyon)',
        'Paspo valab soti Ayiti',
        'Batistè',
        'Prèv prezans kontinyèl (fakti, lwaye, dosye travay)',
        'Nenpòt dokiman ki sipòte reklamasyon azil (prèv pèsekisyon/menas)',
        'Dokiman fanmi (si ap aplike atravè fanmi)',
        'De foto paspo (2x2 pous)',
        'Rapò lapolis (si viktim krim pou viza U)'
      ],
      haitiSpecific: '🚨 PWOGRAM CHNV FINI: Tribinal Siprèm te kenbe revokasyon DHS nan 30 Me 2025. Otorizasyon travay revoke imedyatman. USCIS te deklare ke soti Ayiti se yon "faktè negatif siyifikatif" nan aplikasyon imigrasyon. Sa fè prèv solid ak reprezantasyon legal esansyèl. Paròl Reunifikasyon Fanmi (HFRP) te fini tou nan dat 14 Janvye 2026.'
    }
  },
  asylum: {
    en: {
      whatThisMeans: 'You are seeking asylum or have been granted asylum/refugee status. Asylum provides protection to people who have suffered persecution or fear persecution in their home country based on race, religion, nationality, political opinion, or membership in a particular social group.',
      criticalWarning: 'CRITICAL: You must file your asylum application within ONE YEAR of arriving in the United States. Missing this deadline can make you ineligible for asylum.',
      availableOptions: [
        {
          title: 'Complete Asylum Application (Form I-589)',
          description: 'If you haven\'t yet filed, submit Form I-589 within one year of arrival. This is the most critical step.',
          eligibility: 'Must have arrived within the last year (unless exception applies). Must fear persecution based on protected ground.',
          timeline: 'File within 1 year of arrival. Interview: law says 45 days but backlog causes delays. Decision: 180 days (by law) but often much longer.',
          cost: '$100 (new 2025 fee). Annual fees may apply while pending. Fee waivers NOT available for asylum fees under new law.'
        },
        {
          title: 'Employment Authorization (Work Permit)',
          description: 'You can apply for a work permit while your asylum case is pending.',
          eligibility: 'Must have filed I-589 at least 150 days ago. Case must still be pending.',
          timeline: 'Can apply after 150 days. Can be approved after 180 days. Currently processing in less than 30 days once eligible.',
          cost: '$410 (I-765). Fee waiver may be available.'
        },
        {
          title: 'Green Card (After Asylum Granted)',
          description: 'One year after being granted asylum, you can apply for permanent residency.',
          eligibility: 'Must have been granted asylum at least 1 year ago. Must still be eligible (not have abandoned status).',
          timeline: 'I-485 processing: 8-20 months currently.',
          cost: '$1,225 (I-485) + $85 biometrics'
        },
        {
          title: 'Family Reunification',
          description: 'If granted asylum, you can petition for your spouse and unmarried children under 21 to join you.',
          eligibility: 'Must file within 2 years of asylum approval. Family must have been in relationship at time of your asylum filing.',
          timeline: 'Processing varies, often 1-2 years',
          cost: 'No fee for derivative asylum family members'
        },
        {
          title: 'Citizenship (After Green Card)',
          description: 'Five years after receiving your green card, you can apply for US citizenship.',
          eligibility: '5 years as permanent resident, continuous residence, physical presence requirements, good moral character',
          timeline: 'N-400 processing currently: 6.1 months (fastest since 2016)',
          cost: '$760 (N-400)'
        }
      ],
      stepByStep: [
        { step: 1, action: 'Calculate your one-year deadline', details: 'Find your I-94 arrival date at i94.cbp.dhs.gov. You MUST file I-589 before this anniversary.' },
        { step: 2, action: 'Get legal help', details: 'Asylum cases are complex. Find free legal help at justice.gov/eoir/find-legal-representation or local immigration legal aid.' },
        { step: 3, action: 'Prepare your case thoroughly', details: 'Gather evidence of persecution: news articles, country condition reports, personal declarations, witness statements, medical/psychological evaluations.' },
        { step: 4, action: 'File I-589 properly', details: 'Can file online for some cases. Include all family members. Keep copies of everything. Send by tracked mail.' },
        { step: 5, action: 'Attend biometrics appointment', details: 'USCIS will send you an appointment notice. Do not miss this.' },
        { step: 6, action: 'Prepare for interview', details: 'Know your case well. Bring interpreter if needed (USCIS provides one but you can bring your own). Bring all documents.' },
        { step: 7, action: 'Apply for work permit at 150 days', details: 'Don\'t wait - file I-765 on day 150 to start the clock on work authorization.' }
      ],
      requirements: [
        'Form I-589 (completed in English)',
        'Passport and travel documents',
        'I-94 record (proof of entry date)',
        'Two passport photos',
        'Personal declaration (your story in detail)',
        'Evidence of persecution (documents, photos, news articles)',
        'Country condition evidence (State Dept reports, human rights reports)',
        'Medical/psychological evaluations (if applicable)',
        'Witness declarations',
        'Identity documents from home country'
      ]
    },
    ht: {
      whatThisMeans: 'Ou ap chèche azil oswa ou te resevwa estati azil/refijye. Azil bay pwoteksyon pou moun ki te soufri pèsekisyon oswa ki pè pèsekisyon nan peyi lakay yo ki baze sou ras, relijyon, nasyonalite, opinyon politik, oswa manm nan yon gwoup sosyal patikilye.',
      criticalWarning: 'KRITIK: Ou dwe depoze aplikasyon azil ou nan YON ANE apre ou rive nan Etazini. Manke dat limit sa a ka fè ou pa elijib pou azil.',
      availableOptions: [
        {
          title: 'Konplete Aplikasyon Azil (Fòm I-589)',
          description: 'Si ou poko depoze, soumèt Fòm I-589 nan yon ane apre rive. Sa a se etap ki pi kritik.',
          eligibility: 'Dwe te rive nan dènye ane a (sof si eksepsyon aplike). Dwe pè pèsekisyon ki baze sou yon rezon pwoteje.',
          timeline: 'Depoze nan 1 ane apre rive. Entèvyou: lalwa di 45 jou men reta lakòz reta. Desizyon: 180 jou (pa lalwa) men souvan pi long.',
          cost: '$100 (nouvo frè 2025). Frè anyèl ka aplike pandan ap tann. Dispans frè PA disponib pou frè azil anba nouvo lwa.'
        },
        {
          title: 'Otorizasyon Travay (Pèmi Travay)',
          description: 'Ou ka aplike pou yon pèmi travay pandan ka azil ou ap tann.',
          eligibility: 'Dwe te depoze I-589 omwen 150 jou de sa. Ka a dwe toujou ap tann.',
          timeline: 'Ka aplike apre 150 jou. Ka apwouve apre 180 jou. Kounye a ap trete nan mwens pase 30 jou yon fwa elijib.',
          cost: '$410 (I-765). Dispans frè ka disponib.'
        },
        {
          title: 'Kat Vèt (Apre Azil Akòde)',
          description: 'Yon ane apre yo te akòde ou azil, ou ka aplike pou rezidans pèmanan.',
          eligibility: 'Dwe te resevwa azil omwen 1 ane de sa. Dwe toujou elijib (pa abandone estati).',
          timeline: 'Tretman I-485: 8-20 mwa kounye a.',
          cost: '$1,225 (I-485) + $85 biyometrik'
        },
        {
          title: 'Reyinyon Fanmi',
          description: 'Si ou resevwa azil, ou ka petisyone pou mari/madanm ou ak timoun ki poko marye ki gen mwens pase 21 an vin jwenn ou.',
          eligibility: 'Dwe depoze nan 2 ane apre apwobasyon azil. Fanmi dwe te nan relasyon nan moman ou te depoze azil.',
          timeline: 'Tretman varye, souvan 1-2 ane',
          cost: 'Pa gen frè pou manm fanmi azil derive'
        },
        {
          title: 'Sitwayènte (Apre Kat Vèt)',
          description: 'Senk ane apre ou resevwa kat vèt ou, ou ka aplike pou sitwayènte ameriken.',
          eligibility: '5 ane kòm rezidan pèmanan, rezidans kontinyèl, egzijans prezans fizik, bon karaktè moral',
          timeline: 'Tretman N-400 kounye a: 6.1 mwa (pi rapid depi 2016)',
          cost: '$760 (N-400)'
        }
      ],
      stepByStep: [
        { step: 1, action: 'Kalkile dat limit yon ane ou', details: 'Jwenn dat rive I-94 ou nan i94.cbp.dhs.gov. Ou DWE depoze I-589 anvan anivèsè sa a.' },
        { step: 2, action: 'Jwenn èd legal', details: 'Ka azil yo konplike. Jwenn èd legal gratis nan justice.gov/eoir/find-legal-representation oswa èd legal imigrasyon lokal.' },
        { step: 3, action: 'Prepare ka ou byen', details: 'Rasanble prèv pèsekisyon: atik nouvèl, rapò kondisyon peyi, deklarasyon pèsonèl, temwayaj temwen, evalyasyon medikal/sikolojik.' },
        { step: 4, action: 'Depoze I-589 kòrèkteman', details: 'Ka depoze sou entènèt pou kèk ka. Mete tout manm fanmi. Kenbe kopi tout bagay. Voye pa lapòs ki ka swiv.' },
        { step: 5, action: 'Asiste randevou biyometrik', details: 'USCIS ap voye ou yon avi randevou. Pa manke sa a.' },
        { step: 6, action: 'Prepare pou entèvyou', details: 'Konnen ka ou byen. Pote entèprèt si nesesè (USCIS bay youn men ou ka pote pa ou). Pote tout dokiman.' },
        { step: 7, action: 'Aplike pou pèmi travay nan 150 jou', details: 'Pa tann - depoze I-765 nan jou 150 pou kòmanse revèy pou otorizasyon travay.' }
      ],
      requirements: [
        'Fòm I-589 (ranpli an Anglè)',
        'Paspo ak dokiman vwayaj',
        'Dosye I-94 (prèv dat antre)',
        'De foto paspo',
        'Deklarasyon pèsonèl (istwa ou an detay)',
        'Prèv pèsekisyon (dokiman, foto, atik nouvèl)',
        'Prèv kondisyon peyi (rapò Depatman Deta, rapò dwa moun)',
        'Evalyasyon medikal/sikolojik (si aplikab)',
        'Deklarasyon temwen',
        'Dokiman idantite soti nan peyi lakay'
      ]
    }
  },
  greenCard: {
    en: {
      whatThisMeans: 'You are a Lawful Permanent Resident (LPR) of the United States. Your green card allows you to live and work permanently in the US. You can now sponsor certain family members and, after meeting requirements, apply for US citizenship.',
      criticalWarning: null,
      availableOptions: [
        {
          title: 'Apply for US Citizenship (Naturalization)',
          description: 'Become a US citizen with full rights including voting and a US passport. This is the ultimate goal for most green card holders.',
          eligibility: '5 years as LPR (3 years if married to US citizen), continuous residence, physical presence (30 months of 5 years), good moral character, English and civics test',
          timeline: 'N-400 processing: currently 6.1 months (fastest since 2016). Total: 8-14 months from filing to oath ceremony.',
          cost: '$760 (N-400 application fee). Fee waiver available for those with income below 150% of poverty guidelines.'
        },
        {
          title: 'Sponsor Family Members',
          description: 'As an LPR, you can petition for your spouse and unmarried children to get green cards.',
          eligibility: 'Can petition for: Spouse, unmarried children under 21 (F2A), unmarried children 21+ (F2B). CANNOT petition for: parents, siblings, married children.',
          timeline: 'F2A (spouse/children under 21): 2-3 years. F2B (unmarried adult children): 6-9 years. Much faster after you become a citizen.',
          cost: '$535 (I-130) per person + their green card fees when current'
        },
        {
          title: 'Renew Your Green Card (I-90)',
          description: 'Green cards expire after 10 years and must be renewed. Your status doesn\'t expire, but you need a valid card.',
          eligibility: 'Card expired or expiring within 6 months, or card was lost/stolen/damaged',
          timeline: 'Processing: 8-12 months. You get an 18-month extension receipt for travel/work.',
          cost: '$465 (I-90 application fee)'
        },
        {
          title: 'Remove Conditions (2-Year Green Card)',
          description: 'If you received a conditional (2-year) green card through marriage, you must file to remove conditions.',
          eligibility: 'Conditional residents must file Form I-751 during the 90 days before the 2-year card expires',
          timeline: 'File 90 days before expiration. Processing: 12-24 months. Get extension receipt.',
          cost: '$595 (I-751). If divorced/widowed, can file with waiver.'
        },
        {
          title: 'Get a Re-entry Permit for Extended Travel',
          description: 'If you need to travel outside the US for more than 1 year, get a re-entry permit first.',
          eligibility: 'LPRs planning to be outside US for 1-2 years. Must apply BEFORE leaving.',
          timeline: 'Processing: 3-5 months. Valid for 2 years.',
          cost: '$575 (I-131)'
        }
      ],
      stepByStep: [
        { step: 1, action: 'Track your time as an LPR', details: 'You need 5 years (or 3 if married to USC) before applying for citizenship. Mark your green card approval date.' },
        { step: 2, action: 'Maintain continuous residence', details: 'Don\'t leave the US for more than 6 months at a time, or 1 year total. Trips over 6 months can break continuous residence.' },
        { step: 3, action: 'Keep your green card valid', details: 'Renew 6 months before expiration. Always carry your card. Report address changes within 10 days (AR-11 online).' },
        { step: 4, action: 'File taxes every year', details: 'As an LPR, you must file US taxes on worldwide income. Keep tax returns - you\'ll need them for citizenship.' },
        { step: 5, action: 'Avoid criminal issues', details: 'Certain crimes can make you deportable even as an LPR. Always consult an immigration attorney if arrested.' },
        { step: 6, action: 'Prepare for citizenship', details: 'Start studying English and civics. USCIS has free study materials at uscis.gov/citizenship.' }
      ],
      requirements: [
        'Valid green card (renew if expiring)',
        'Passport (keep current for travel)',
        'Tax returns (last 5 years for citizenship)',
        'Proof of continuous residence',
        'Travel records (passport stamps, tickets)',
        'Marriage certificate (if applicable)',
        'Divorce decree (if applicable)',
        'Any court/arrest records (if applicable)'
      ]
    },
    ht: {
      whatThisMeans: 'Ou se yon Rezidan Pèmanan Legal (LPR) nan Etazini. Kat vèt ou pèmèt ou viv ak travay pèmanantman nan Etazini. Ou kapab kounye a patwone sèten manm fanmi epi, apre ou satisfè kondisyon yo, aplike pou sitwayènte ameriken.',
      criticalWarning: null,
      availableOptions: [
        {
          title: 'Aplike pou Sitwayènte Ameriken (Natiralizasyon)',
          description: 'Vin yon sitwayen ameriken ak tout dwa yo enkli vote ak yon paspò ameriken. Sa a se objektif final pou pifò moun ki gen kat vèt.',
          eligibility: '5 ane kòm LPR (3 ane si marye ak sitwayen ameriken), rezidans kontinyèl, prezans fizik (30 mwa sou 5 ane), bon karaktè moral, tès Anglè ak sivik',
          timeline: 'Tretman N-400: kounye a 6.1 mwa (pi rapid depi 2016). Total: 8-14 mwa depi depo jiska seremoni sèman.',
          cost: '$760 (frè aplikasyon N-400). Dispans frè disponib pou moun ki gen revni ki anba 150% gid povrete.'
        },
        {
          title: 'Patwone Manm Fanmi',
          description: 'Kòm yon LPR, ou ka petisyone pou mari/madanm ou ak timoun ki poko marye jwenn kat vèt.',
          eligibility: 'Ka petisyone pou: Mari/madanm, timoun ki poko marye ki gen mwens pase 21 an (F2A), timoun ki poko marye ki gen 21+ (F2B). PA KA petisyone pou: paran, frè/sè, timoun marye.',
          timeline: 'F2A (mari/madanm/timoun ki gen mwens pase 21 an): 2-3 ane. F2B (timoun adilt ki poko marye): 6-9 ane. Pi vit anpil apre ou vin sitwayen.',
          cost: '$535 (I-130) pa moun + frè kat vèt yo lè aktyèl'
        },
        {
          title: 'Renouvle Kat Vèt Ou (I-90)',
          description: 'Kat vèt ekspire apre 10 ane epi dwe renouvle. Estati ou pa ekspire, men ou bezwen yon kat valab.',
          eligibility: 'Kat ekspire oswa ap ekspire nan 6 mwa, oswa kat te pèdi/vòlè/domaje',
          timeline: 'Tretman: 8-12 mwa. Ou jwenn yon resi ekstansyon 18 mwa pou vwayaj/travay.',
          cost: '$465 (frè aplikasyon I-90)'
        },
        {
          title: 'Retire Kondisyon (Kat Vèt 2 Ane)',
          description: 'Si ou te resevwa yon kat vèt kondisyonèl (2 ane) atravè maryaj, ou dwe depoze pou retire kondisyon yo.',
          eligibility: 'Rezidan kondisyonèl dwe depoze Fòm I-751 pandan 90 jou anvan kat 2 ane a ekspire',
          timeline: 'Depoze 90 jou anvan ekspirasyon. Tretman: 12-24 mwa. Jwenn resi ekstansyon.',
          cost: '$595 (I-751). Si divòse/vèv, ka depoze avèk dispans.'
        },
        {
          title: 'Jwenn yon Pèmi Re-antre pou Vwayaj Pwolonje',
          description: 'Si ou bezwen vwayaje deyò Etazini pou plis pase 1 ane, jwenn yon pèmi re-antre an premye.',
          eligibility: 'LPR ki planifye pou deyò Etazini pou 1-2 ane. Dwe aplike ANVAN kite.',
          timeline: 'Tretman: 3-5 mwa. Valab pou 2 ane.',
          cost: '$575 (I-131)'
        }
      ],
      stepByStep: [
        { step: 1, action: 'Swiv tan ou kòm LPR', details: 'Ou bezwen 5 ane (oswa 3 si marye ak USC) anvan aplike pou sitwayènte. Make dat apwobasyon kat vèt ou.' },
        { step: 2, action: 'Kenbe rezidans kontinyèl', details: 'Pa kite Etazini pou plis pase 6 mwa alafwa, oswa 1 ane total. Vwayaj plis pase 6 mwa ka kase rezidans kontinyèl.' },
        { step: 3, action: 'Kenbe kat vèt ou valab', details: 'Renouvle 6 mwa anvan ekspirasyon. Toujou pote kat ou. Rapòte chanjman adrès nan 10 jou (AR-11 sou entènèt).' },
        { step: 4, action: 'Depoze taks chak ane', details: 'Kòm yon LPR, ou dwe depoze taks ameriken sou revni mondyal. Kenbe deklarasyon taks - ou pral bezwen yo pou sitwayènte.' },
        { step: 5, action: 'Evite pwoblèm kriminèl', details: 'Sèten krim ka fè ou deportab menm kòm yon LPR. Toujou konsilte yon avoka imigrasyon si yo arete ou.' },
        { step: 6, action: 'Prepare pou sitwayènte', details: 'Kòmanse etidye Anglè ak sivik. USCIS gen materyèl etid gratis nan uscis.gov/citizenship.' }
      ],
      requirements: [
        'Kat vèt valab (renouvle si ap ekspire)',
        'Paspo (kenbe aktyèl pou vwayaj)',
        'Deklarasyon taks (dènye 5 ane pou sitwayènte)',
        'Prèv rezidans kontinyèl',
        'Dosye vwayaj (so paspo, tikè)',
        'Sètifika maryaj (si aplikab)',
        'Dekrè divòs (si aplikab)',
        'Nenpòt dosye tribinal/arestasyon (si aplikab)'
      ]
    }
  },
  other: {
    en: {
      whatThisMeans: 'Your immigration situation may be unique or complex. This could include being out of status, having a pending case, or being unsure of your current status. It\'s critical to understand your situation and options.',
      criticalWarning: 'WARNING: If you are out of status or undocumented, certain actions (like leaving the US) can trigger bars to reentry. Do NOT make major decisions without consulting an attorney.',
      availableOptions: [
        {
          title: 'Consult an Immigration Attorney Immediately',
          description: 'Your first and most important step. Many provide free or low-cost consultations.',
          eligibility: 'Everyone can seek consultation',
          timeline: 'Do this NOW',
          cost: 'Free to $200+ for consultation'
        },
        {
          title: 'Temporary Protected Status (TPS)',
          description: 'If you\'re from Haiti and meet residency requirements, you may apply - but TPS is ending Feb 3, 2026.',
          eligibility: 'Must have been in US since June 3, 2024 and present since Aug 4, 2024',
          timeline: 'Program ends Feb 3, 2026',
          cost: '$500 + $30 biometrics + $410 EAD (H.R. 1 fee - cannot be waived)'
        },
        {
          title: 'Asylum',
          description: 'If you fear persecution in Haiti, you may apply for asylum within one year of arrival.',
          eligibility: 'Must file within 1 year of arrival. Must show fear of persecution.',
          timeline: 'Months to years',
          cost: '$100 filing fee'
        },
        {
          title: 'Family-Based Petition',
          description: 'If you have US citizen or permanent resident family members, they may be able to petition for you.',
          eligibility: 'Depends on relationship and family member\'s status',
          timeline: 'Varies widely - months to 20+ years',
          cost: '$535 (I-130) + additional fees'
        },
        {
          title: 'VAWA (Violence Against Women Act)',
          description: 'If you are a victim of domestic violence by a US citizen or permanent resident spouse/parent, you may self-petition.',
          eligibility: 'Victim of battery or extreme cruelty by USC or LPR spouse/parent',
          timeline: '12-18 months for approval',
          cost: 'No filing fee'
        },
        {
          title: 'U-Visa (Crime Victims)',
          description: 'If you were a victim of certain crimes and helped law enforcement, you may qualify.',
          eligibility: 'Victim of qualifying crime, helpful to law enforcement',
          timeline: '5+ years due to backlog',
          cost: 'No filing fee'
        }
      ],
      stepByStep: [
        { step: 1, action: 'Document your entry and presence', details: 'Gather any evidence of when you arrived and your continuous presence (utility bills, school records, medical records, etc.)' },
        { step: 2, action: 'Do NOT leave the United States', details: 'If you\'ve been out of status, leaving can trigger 3 or 10-year bars. Consult attorney first.' },
        { step: 3, action: 'Avoid encounters with immigration enforcement', details: 'Know your rights. You have the right to remain silent. You have the right to an attorney.' },
        { step: 4, action: 'Find legal help', details: 'Use justice.gov/eoir/find-legal-representation or search for local immigration legal aid organizations.' },
        { step: 5, action: 'Be honest with your attorney', details: 'They need to know your full situation to help you. Attorney-client privilege protects your information.' }
      ],
      requirements: [
        'Any immigration documents you have',
        'Passport (if available)',
        'Birth certificate',
        'Evidence of US presence (bills, records, anything with dates)',
        'Documentation of any applications filed',
        'Police reports (if victim of crime)',
        'Medical records (if applicable)',
        'Any court documents'
      ]
    },
    ht: {
      whatThisMeans: 'Sitiyasyon imigrasyon ou ka inik oswa konplike. Sa a ka enkli yo deyò estati, gen yon ka k ap tann, oswa ou pa sèten de estati aktyèl ou. Li kritik pou konprann sitiyasyon ou ak opsyon.',
      criticalWarning: 'AVÈTISMAN: Si ou deyò estati oswa san papye, sèten aksyon (tankou kite Etazini) ka deklanche entèdiksyon pou antre ankò. PA pran desizyon enpòtan san konsilte yon avoka.',
      availableOptions: [
        {
          title: 'Konsilte yon Avoka Imigrasyon Imedyatman',
          description: 'Premye etap ou ki pi enpòtan. Anpil bay konsiltasyon gratis oswa bon mache.',
          eligibility: 'Tout moun ka chèche konsiltasyon',
          timeline: 'Fè sa KOUNYE A',
          cost: 'Gratis jiska $200+ pou konsiltasyon'
        },
        {
          title: 'Estati Pwoteksyon Tanporè (TPS)',
          description: 'Si ou soti Ayiti epi ou satisfè egzijans rezidans, ou ka aplike - men TPS ap fini 3 Fev 2026.',
          eligibility: 'Dwe te nan Etazini depi 3 Jen 2024 epi prezan depi 4 Out 2024',
          timeline: 'Pwogram fini 3 Fev 2026',
          cost: '$500 + $30 biyometrik + $410 EAD (frè H.R. 1 - pa ka anile)'
        },
        {
          title: 'Azil',
          description: 'Si ou pè pèsekisyon nan Ayiti, ou ka aplike pou azil nan yon ane apre rive.',
          eligibility: 'Dwe depoze nan 1 ane apre rive. Dwe montre laperèz pèsekisyon.',
          timeline: 'Mwa a ane',
          cost: '$100 frè depo'
        },
        {
          title: 'Petisyon Ki Baze Sou Fanmi',
          description: 'Si ou gen manm fanmi ki sitwayen ameriken oswa rezidan pèmanan, yo ka kapab petisyone pou ou.',
          eligibility: 'Depann de relasyon ak estati manm fanmi',
          timeline: 'Varye anpil - mwa jiska 20+ ane',
          cost: '$535 (I-130) + frè adisyonèl'
        },
        {
          title: 'VAWA (Lwa Kont Vyolans Fanm)',
          description: 'Si ou se yon viktim vyolans domestik pa yon sitwayen ameriken oswa mari/madanm/paran rezidan pèmanan, ou ka petisyone pou tèt ou.',
          eligibility: 'Viktim bat oswa maltrete ekstrèm pa USC oswa LPR mari/madanm/paran',
          timeline: '12-18 mwa pou apwobasyon',
          cost: 'Pa gen frè depo'
        },
        {
          title: 'Viza U (Viktim Krim)',
          description: 'Si ou te yon viktim sèten krim epi ou te ede lapolis, ou ka kalifye.',
          eligibility: 'Viktim krim ki kalifye, itil pou lapolis',
          timeline: '5+ ane akòz reta',
          cost: 'Pa gen frè depo'
        }
      ],
      stepByStep: [
        { step: 1, action: 'Dokimante antre ou ak prezans ou', details: 'Rasanble nenpòt prèv ki lè ou te rive ak prezans kontinyèl ou (fakti sèvis piblik, dosye lekòl, dosye medikal, elatriye)' },
        { step: 2, action: 'PA kite Etazini', details: 'Si ou te deyò estati, kite ka deklanche entèdiksyon 3 oswa 10 ane. Konsilte avoka an premye.' },
        { step: 3, action: 'Evite rankont ak aplikasyon lwa imigrasyon', details: 'Konnen dwa ou. Ou gen dwa rete an silans. Ou gen dwa a yon avoka.' },
        { step: 4, action: 'Jwenn èd legal', details: 'Itilize justice.gov/eoir/find-legal-representation oswa chèche òganizasyon èd legal imigrasyon lokal.' },
        { step: 5, action: 'Swa onèt ak avoka ou', details: 'Yo bezwen konnen sitiyasyon konplè ou pou ede ou. Privilèj avoka-kliyan pwoteje enfòmasyon ou.' }
      ],
      requirements: [
        'Nenpòt dokiman imigrasyon ou genyen',
        'Paspo (si disponib)',
        'Batistè',
        'Prèv prezans nan Etazini (fakti, dosye, nenpòt bagay ki gen dat)',
        'Dokimantasyon nenpòt aplikasyon ki te depoze',
        'Rapò lapolis (si viktim krim)',
        'Dosye medikal (si aplikab)',
        'Nenpòt dokiman tribinal'
      ]
    }
  }
}

function StatusInfo({ status, language, t, searchQuery = '' }) {
  const data = statusData[status]?.[language] || statusData[status]?.en

  const highlightText = (text) => {
    if (!searchQuery || typeof text !== 'string') return text
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'))
    return parts.map((part, i) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark key={i} className="search-highlight">{part}</mark>
      ) : part
    )
  }

  return (
    <div className="status-info">
      <h2>{t('statusInfo')}</h2>

      {data.criticalWarning && (
        <div className="critical-warning">
          <p>{highlightText(data.criticalWarning)}</p>
        </div>
      )}

      <div className="info-section">
        <h3>{t('whatThisMeans')}</h3>
        <p className="info-text">{highlightText(data.whatThisMeans)}</p>
      </div>

      <div className="info-section">
        <h3>{t('availableOptions')}</h3>
        <div className="options-detailed">
          {data.availableOptions.map((option, index) => (
            <div key={index} className="option-card">
              <h4>{highlightText(option.title)}</h4>
              <p className="option-description">{highlightText(option.description)}</p>
              <div className="option-details">
                <div className="option-detail">
                  <strong>{language === 'en' ? 'Eligibility:' : 'Kalifikasyon:'}</strong>
                  <span>{highlightText(option.eligibility)}</span>
                </div>
                <div className="option-detail">
                  <strong>{language === 'en' ? 'Timeline:' : 'Kalandriye:'}</strong>
                  <span>{highlightText(option.timeline)}</span>
                </div>
                <div className="option-detail">
                  <strong>{language === 'en' ? 'Cost:' : 'Pri:'}</strong>
                  <span>{highlightText(option.cost)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {data.stepByStep && (
        <div className="info-section">
          <h3>{language === 'en' ? 'Step-by-Step Guide' : 'Gid Etap pa Etap'}</h3>
          <div className="step-by-step">
            {data.stepByStep.map((item, index) => (
              <div key={index} className="step-item">
                <div className="step-number">{item.step}</div>
                <div className="step-content">
                  <strong>{highlightText(item.action)}</strong>
                  <p>{highlightText(item.details)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="info-section">
        <h3>{t('requirements')}</h3>
        <ul className="info-list requirements-list">
          {data.requirements.map((req, index) => (
            <li key={index}>{highlightText(req)}</li>
          ))}
        </ul>
      </div>

      {data.haitiSpecific && (
        <div className="info-section haiti-specific critical-warning">
          <h3>🇭🇹 {language === 'en' ? 'Critical Information for Haitians' : 'Enfòmasyon Kritik pou Ayisyen'}</h3>
          <p className="info-text haiti-note">{highlightText(data.haitiSpecific)}</p>
        </div>
      )}

      <div className="info-section disclaimer-section">
        <p className="disclaimer">
          {language === 'en'
            ? '⚠️ IMPORTANT: Immigration law changes frequently. This information is current as of December 2025 but may change. Always verify with USCIS.gov and consult a qualified immigration attorney before making decisions. This guide is for informational purposes only and is not legal advice.'
            : '⚠️ ENPÒTAN: Lwa imigrasyon chanje souvan. Enfòmasyon sa yo ajou nan Desanm 2025 men yo ka chanje. Toujou verifye avèk USCIS.gov epi konsilte yon avoka imigrasyon kalifye anvan ou pran desizyon. Gid sa a se pou enfòmasyon sèlman epi li pa konsèy legal.'}
        </p>
      </div>
    </div>
  )
}

export default StatusInfo
