import { z } from 'zod';
import { emailValidationMessages } from '../constants/validationMessages';

export const emailSchema = z
  .string({
    required_error: emailValidationMessages.required,
  })
  .trim()
  .min(5, { message: emailValidationMessages.minLength })
  .max(254, { message: emailValidationMessages.maxLength })
  .email({ message: emailValidationMessages.invalid })
  .toLowerCase();
