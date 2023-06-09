import { NotaService } from 'assets/js/services/types'
import { getHeadlines } from 'assets/js/services/notaService/getHeadlines'
import { getSummary } from 'assets/js/services/notaService/getSummary'
import { getKeywords } from 'assets/js/services/notaService/getKeywords'
import { getMetaDescriptions } from 'assets/js/services/notaService/getMetaDescriptions'
import { getMetaTitles } from 'assets/js/services/notaService/getMetaTitles'

export const notaService: NotaService = {
  getHeadlines,
  getKeywords,
  getMetaDescriptions,
  getMetaTitles,
  getSummary,
}
