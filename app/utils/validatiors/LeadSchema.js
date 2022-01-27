import * as yup from 'yup';

const LeadSchema = yup.object().shape({
  handler: yup.string().required('Please add handler'),
  platform: yup.string().required('Please add platform'),
  profile: yup.string().required('Please add profile'),
  rateApplied: yup.string().required('Please add rateApplied'),
  rateRange: yup.string().required('Please add rateRange'),
  jobType: yup.string().required('Please add jobType'),
  mode: yup.string().required('Please add mode'),
  leadUrl: yup.string().required('Please add leadUrl'),
  status: yup.string().required('Please add status'),
  clientName: yup.string().required('Please add clientName'),
  primarySkills: yup.string().required('Please add primarySkills'),
  secondarySkills: yup.string().required('Please add secondarySkills'),
  connectsUsed: yup.string().required('Please add connectsUsed'),
  totalSpent: yup.string().required('Please add totalSpent'),
  averagePay: yup.string().required('Please add averagePay'),
  otherOpenJob: yup.string().required('Please add otherOpenJob'),
  comments: yup.string().required('Please add comments'),
});

export default LeadSchema;
