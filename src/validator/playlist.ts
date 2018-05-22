import { ValidationParamSchema } from 'express-validator/check'

export const name: ValidationParamSchema = {
  in: ['body', 'params'],
  isEmpty: {
    errorMessage: '歌单名称不能为空',
    negated: true,
  },
  isLength: {
    options: { max: 20 },
    errorMessage: '歌单名称不得超过20个字符',
  },
  trim: true,
}