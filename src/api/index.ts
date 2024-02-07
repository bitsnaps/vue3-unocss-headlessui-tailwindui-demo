import request from './request'

export default {
  oneSentence: () => request.get('https://zenquotes.io/api/random'),
}
