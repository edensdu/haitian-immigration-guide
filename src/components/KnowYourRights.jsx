import React, { useState } from 'react'
import './KnowYourRights.css'

const rightsData = {
  en: {
    title: 'Know Your Rights',
    subtitle: 'Important information if contacted by immigration enforcement',
    rights: [
      {
        icon: '🤐',
        title: 'Right to Remain Silent',
        description: 'You have the right to remain silent. You do not have to answer questions about where you were born, your immigration status, or how you entered the US.',
        action: 'Say: "I wish to remain silent."'
      },
      {
        icon: '👨‍⚖️',
        title: 'Right to an Attorney',
        description: 'You have the right to speak with a lawyer before answering any questions. If you cannot afford one, you may be eligible for free legal help.',
        action: 'Say: "I want to speak with an attorney."'
      },
      {
        icon: '🚪',
        title: 'Right to Refuse Entry',
        description: 'If ICE or police come to your home, you do not have to let them in unless they have a warrant signed by a judge. Ask them to slip the warrant under the door.',
        action: 'Say: "I do not consent to your entry."'
      },
      {
        icon: '📝',
        title: 'Do Not Sign Anything',
        description: 'Do not sign any documents without an attorney present. Signing certain forms could waive your rights or lead to deportation.',
        action: 'Say: "I will not sign without my attorney."'
      },
      {
        icon: '📱',
        title: 'Record & Document',
        description: 'You have the right to record interactions with immigration officers in public spaces. Note badge numbers, names, and any witnesses.',
        action: 'Document everything you can safely.'
      }
    ],
    emergencyContacts: [
      {
        name: 'ICE Detention Hotline (National)',
        phone: '1-888-351-4024',
        description: 'Report detained family members'
      },
      {
        name: 'Immigration Rights Hotline (NILC)',
        phone: '1-833-336-3265',
        description: 'Know your rights information'
      },
      {
        name: 'USCIS Contact Center',
        phone: '1-800-375-5283',
        description: 'Case status and general questions'
      },
      {
        name: 'Haitian Bridge Alliance',
        phone: '(619) 732-0000',
        description: 'Support for Haitian immigrants'
      }
    ],
    warningTitle: 'If You Are Detained',
    warningSteps: [
      'Remain calm. Do not run, argue, or resist.',
      'Do not lie or provide false documents.',
      'Remember: You have the right to remain silent.',
      'Ask to call your attorney or family member.',
      'Memorize an emergency contact number.',
      'Do not sign any documents without an attorney.'
    ],
    disclaimer: 'This is general information, not legal advice. Immigration law is complex and changes frequently. Always consult with a qualified immigration attorney for advice specific to your situation.'
  },
  ht: {
    title: 'Konnen Dwa Ou',
    subtitle: 'Enfòmasyon enpòtan si otorite imigrasyon kontakte ou',
    rights: [
      {
        icon: '🤐',
        title: 'Dwa pou Rete an Silans',
        description: 'Ou gen dwa pou rete an silans. Ou pa oblije reponn kesyon sou kote ou te fèt, estati imigrasyon ou, oswa kijan ou te antre Etazini.',
        action: 'Di: "Mwen vle rete an silans."'
      },
      {
        icon: '👨‍⚖️',
        title: 'Dwa a yon Avoka',
        description: 'Ou gen dwa pale ak yon avoka anvan ou reponn nenpòt kesyon. Si ou pa ka peye, ou ka elijib pou èd legal gratis.',
        action: 'Di: "Mwen vle pale ak yon avoka."'
      },
      {
        icon: '🚪',
        title: 'Dwa pou Refize Antre',
        description: 'Si ICE oswa polis vini lakay ou, ou pa oblije kite yo antre sof si yo gen yon manda ke yon jij siyen. Mande yo glise manda a anba pòt la.',
        action: 'Di: "Mwen pa dakò pou ou antre."'
      },
      {
        icon: '📝',
        title: 'Pa Siyen Anyen',
        description: 'Pa siyen okenn dokiman san yon avoka prezan. Siyen sèten fòm ta ka retire dwa ou oswa mennen nan depòtasyon.',
        action: 'Di: "Mwen pap siyen san avoka mwen."'
      },
      {
        icon: '📱',
        title: 'Anrejistre & Dokimante',
        description: 'Ou gen dwa anrejistre entèraksyon ak ofisye imigrasyon nan espas piblik. Note nimewo badj, non, ak nenpòt temwen.',
        action: 'Dokimante tout sa ou ka fè san danje.'
      }
    ],
    emergencyContacts: [
      {
        name: 'Liy Dirèk Detansyon ICE (Nasyonal)',
        phone: '1-888-351-4024',
        description: 'Rapòte manm fanmi ki arete'
      },
      {
        name: 'Liy Dirèk Dwa Imigrasyon (NILC)',
        phone: '1-833-336-3265',
        description: 'Enfòmasyon sou dwa ou'
      },
      {
        name: 'Sant Kontak USCIS',
        phone: '1-800-375-5283',
        description: 'Estati ka ak kesyon jeneral'
      },
      {
        name: 'Haitian Bridge Alliance',
        phone: '(619) 732-0000',
        description: 'Sipò pou imigran ayisyen'
      }
    ],
    warningTitle: 'Si Yo Arete Ou',
    warningSteps: [
      'Rete kalm. Pa kouri, diskite, oswa reziste.',
      'Pa bay manti oswa bay fo dokiman.',
      'Sonje: Ou gen dwa pou rete an silans.',
      'Mande pou rele avoka ou oswa manm fanmi ou.',
      'Memorize yon nimewo kontak ijans.',
      'Pa siyen okenn dokiman san yon avoka.'
    ],
    disclaimer: 'Sa a se enfòmasyon jeneral, pa konsèy legal. Lwa imigrasyon konplike epi chanje souvan. Toujou konsilte ak yon avoka imigrasyon kalifye pou konsèy espesifik pou sitiyasyon ou.'
  }
}

function KnowYourRights({ language }) {
  const [expanded, setExpanded] = useState(false)
  const data = rightsData[language] || rightsData.en

  return (
    <div className="know-your-rights">
      <div className="rights-header" onClick={() => setExpanded(!expanded)}>
        <h2>⚠️ {data.title}</h2>
        <p className="rights-subtitle">{data.subtitle}</p>
        <button className="expand-button">
          {expanded ? '▲ ' : '▼ '}
          {expanded
            ? (language === 'en' ? 'Hide' : 'Kache')
            : (language === 'en' ? 'Show Important Info' : 'Montre Enfòmasyon Enpòtan')}
        </button>
      </div>

      {expanded && (
        <div className="rights-content">
          <div className="rights-list">
            {data.rights.map((right, index) => (
              <div key={index} className="right-item">
                <div className="right-icon">{right.icon}</div>
                <div className="right-details">
                  <h3>{right.title}</h3>
                  <p>{right.description}</p>
                  <div className="right-action">
                    <strong>{right.action}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="warning-section">
            <h3>🚨 {data.warningTitle}</h3>
            <ol className="warning-steps">
              {data.warningSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="emergency-contacts">
            <h3>📞 {language === 'en' ? 'Emergency Contacts' : 'Kontak Ijans'}</h3>
            <div className="contacts-grid">
              {data.emergencyContacts.map((contact, index) => (
                <div key={index} className="contact-card">
                  <h4>{contact.name}</h4>
                  <a href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`} className="contact-phone">
                    {contact.phone}
                  </a>
                  <p className="contact-desc">{contact.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rights-disclaimer">
            <p>⚖️ {data.disclaimer}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default KnowYourRights
