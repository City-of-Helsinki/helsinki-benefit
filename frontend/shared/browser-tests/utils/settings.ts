export const getApplicantUiUrl = (path = ''): string => {
  const baseUrl = process.env.APPLICANT_URL ?? 'http://localhost:3000';
  return `${baseUrl}${path?.startsWith('/') ? path : `/${path ?? ''}`}`;
};

export const getHandlerUiUrl = (path = ''): string => {
  const baseUrl = process.env.HANDLER_URL ?? 'http://localhost:3100';
  return `${baseUrl}${path?.startsWith('/') ? path : `/${path ?? ''}`}`;
};
