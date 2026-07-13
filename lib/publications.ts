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

export const publications: Publication[] = [
  {
    id: 'nature-chem-2026',
    year: '2026',
    journal: 'Nature Chemistry',
    title: 'Nearest-neighbor interactions governing charge transport in DNA',
    impact: 'Providing actionable guidelines for the design of DNA transistors.',
    authors: 'J. Hihath, et al.',
    doi: null,
    pdfUrl: '/papers/nearest-neighbor-charge-transport-2026.pdf',
    openAccess: false,
  },
  {
    id: 'acs-nano-2024',
    year: '2024',
    journal: 'ACS Nano',
    title: 'Self-aligning nanojunction for integrating circuits',
    impact: 'Demonstrates highly scalable manufacturing process.',
    authors: 'J. Hihath, et al.',
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
    authors: 'P. Zhang, et al.',
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
    authors: 'P. Zhang, et al.',
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
    authors: 'P. Zhang, et al.',
    doi: '10.1038/ncomms13868',
    pdfUrl: '/papers/carbohydrate-isomers-tunneling-2016.pdf',
    openAccess: true,
  },
  {
    id: 'pnas-2005',
    year: '2005',
    journal: 'PNAS',
    title: 'Study of single-nucleotide polymorphisms in DNA nanojunctions',
    impact: 'Demonstrates that a single base pair mismatch in DNA can be identified by conductance measurements.',
    authors: 'J. Hihath, P. Zhang, et al.',
    doi: null,
    pdfUrl: '/papers/snp-conductance-2005.pdf',
    openAccess: false,
  },
]
