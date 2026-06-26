export interface Publication {
  id: string
  year: string
  journal: string
  title: string
  impact: string
  authors: string
  doi: string | null
  pdfUrl: string | null
  openAccess: boolean
}

// Server-side source of truth — update doi / pdfUrl here when you have the real links.
// doi links resolve via https://doi.org/<doi>
// pdfUrl is for direct open-access PDFs (arXiv, PubMed Central, author page, etc.)
export const publications: Publication[] = [
  {
    id: 'nature-chem-2026',
    year: '2026',
    journal: 'Nature Chemistry',
    title: 'Nearest-neighbor interactions governing charge transport in DNA',
    impact: 'Providing actionable guidelines for the design of DNA transistors.',
    authors: 'Zhang P. et al.',
    doi: null,           // TODO: add DOI when published, e.g. "10.1038/s41557-026-XXXXX-X"
    pdfUrl: null,        // TODO: add open-access PDF URL if available
    openAccess: false,
  },
  {
    id: 'acs-nano-2024',
    year: '2024',
    journal: 'ACS Nano',
    title: 'Self-aligning nanojunction for integrating circuits',
    impact: 'Demonstrates highly scalable manufacturing process.',
    authors: 'Liu B., Demir B., Gultakti C.A., Marrs J., Gong Y., Li R., Oren E.E. & Hihath J.',
    doi: '10.1021/acsnano.3c10844',
    pdfUrl: '/papers/self-aligning-nanojunctions-2024.pdf',
    openAccess: false,
  },
  {
    id: 'acs-nano-2019',
    year: '2019',
    journal: 'ACS Nano',
    title: 'Quantitation of glycosaminoglycans using nanopore / ML',
    impact: 'Employs Machine Learning to determine concentrations of complex polysaccharides.',
    authors: 'Im J., Lindsay S., Wang X. & Zhang P.',
    doi: '10.1021/acsnano.9b00618',
    pdfUrl: '/papers/glycosaminoglycans-nanopore-2019.pdf',
    openAccess: false,
  },
  {
    id: 'acs-nano-2018',
    year: '2018',
    journal: 'ACS Nano',
    title: 'Tunneling identification of RNA nucleotides via a universal reader / ML',
    impact: 'Demonstrates the versatility of the universal reader / ML system for a different category of molecules.',
    authors: 'Im J., Sen S., Lindsay S. & Zhang P.',
    doi: '10.1021/acsnano.8b02819',
    pdfUrl: '/papers/rna-tunneling-identification-2018.pdf',
    openAccess: false,
  },
  {
    id: 'nature-comm-2016',
    year: '2016',
    journal: 'Nature Communications',
    title: 'Tunneling identification of carbohydrates via a universal reader / ML',
    impact: 'Validation of a nanojunction sensing / chemical recognition / machine learning (ML) system for the detection of complex molecules.',
    authors: 'Im J., Biswas S., Liu H., Zhao Y., Sen S., Biswas S., Ashcroft B., Borges C., Wang X., Lindsay S. & Zhang P.',
    doi: '10.1038/ncomms13868',
    pdfUrl: '/papers/carbohydrate-isomers-tunneling-2016.pdf',
    openAccess: true,
  },
]
