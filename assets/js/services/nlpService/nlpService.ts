import { NlpService } from 'assets/js/application/ports'
import { getHeadlines } from 'assets/js/services/nlpService/getHeadlines'
import { getSummary } from 'assets/js/services/nlpService/getSummary'

export const nlpService: NlpService = {
  getHeadlines,
  getSummary,
}