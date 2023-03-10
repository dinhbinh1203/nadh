const ACTIVE = {
  id: 1,
  key: 1,
  value: 'Active',
  label: 'Active',
};

const OFF_LIMIT = {
  id: -1,
  key: -1,
  value: 'Off-Limit',
  label: 'Off-Limit',
};

const BLACK_LIST = {
  id: -2,
  key: -2,
  value: 'Blacklist',
  label: 'Blacklist',
};

const INACTIVE = {
  id: 5,
  key: 5,
  value: 'Inactive',
  label: 'Inactive',
};

export const priority_status = [ACTIVE, OFF_LIMIT, BLACK_LIST, INACTIVE];

const RAW = { id: 1, key: 1, label: 'Raw' };
const CALL = { id: 2, key: 2, label: 'Screening Call' };
const INTERVIEW_NADH = { id: 3, key: 3, label: 'Interview with NADH' };
const SHORT_LIST = { id: 4, key: 4, label: 'Shortlisting' };
const SUBMIT_CLIENT = { id: 5, key: 5, label: 'Submit to Client' };
const INTERVIEW_CLIENT = { id: 6, key: 6, label: 'Interview with Client' };
const REFERENCE_CHECK = { id: 7, key: 7, label: 'Reference Check' };
const NEGOTIATION = { id: 8, key: 8, label: 'Negotiation' };
const OFFER_ACCEPTED = { id: 9, key: 9, label: 'Offer Accepted' };
const PLACEMENT = { id: 10, key: 10, label: 'Placement' };
const FOLLOW_UP = { id: 11, key: 11, label: 'Follow-up' };
const RE_PLACEMENT = { id: 12, key: 12, label: 'Replacement' };
const CANDIDATE_REJECT = { id: -1, key: -1, label: 'Candidate Declined' };
const NADH_REJECT = { id: -2, key: -2, label: 'Rejected by NADH' };
const CLIENT_REJECT = { id: -3, key: -3, label: 'Rejected by Client' };
const CLIENT_CANCELED = { id: -4, key: -4, label: 'Client Canceled' };

export const candidate_flow_status = [
  RAW,
  CALL,
  INTERVIEW_NADH,
  SHORT_LIST,
  SUBMIT_CLIENT,
  INTERVIEW_CLIENT,
  REFERENCE_CHECK,
  NEGOTIATION,
  OFFER_ACCEPTED,
  PLACEMENT,
  FOLLOW_UP,
  RE_PLACEMENT,
  CANDIDATE_REJECT,
  NADH_REJECT,
  CLIENT_REJECT,
  CLIENT_CANCELED,
];

export const CUSTOM_COLUMNS = {
  candidates: [
    { title: 'candidate_id', label: 'ID', disabled: true },
    { title: 'full_name', label: 'Name', disabled: true },
    { title: 'priority_status', label: 'Primary Status' },
    { title: 'languages', label: 'Languages' },
    { title: 'highest_education', label: 'Highest degree' },
    { title: 'city', label: 'City' },
    { title: 'industry', label: 'Industry' },
    { title: 'yob', label: 'YOB' },
    { title: 'flow_status', label: 'Activity' },
    { title: 'current_employments_companies', label: 'Recent companies' },
    { title: 'current_employments_positions', label: 'Recent positions' },
    { title: 'industry_years', label: 'Year of services' },
    { title: 'management_years', label: 'Year of management' },
    { title: 'updated_on', label: 'Updated on' },
    { title: 'action', label: 'Action', disabled: true },
  ],
};

export const CUSTOM_COLUMNS_CANDIDATES = [
  { title: 'candidate_id', label: 'ID', disabled: true, check: true },
  { title: 'full_name', label: 'Name', disabled: true, check: true },
  { title: 'priority_status', label: 'Primary Status', check: true },
  { title: 'language', label: 'Languages', check: true },
  { title: 'highest_education', label: 'Highest degree', check: true },
  { title: 'location', label: 'City', check: true },
  { title: 'industry', label: 'Industry', check: true },
  { title: 'yob', label: 'YOB', check: true },
  { title: 'flow_status', label: 'Activity', check: true },
  { title: 'current_company', label: 'Recent companies', check: true },
  { title: 'current_position', label: 'Recent positions', check: true },
  { title: 'industry_years', label: 'Year of services', check: true },
  { title: 'management_years', label: 'Year of management', check: true },
  { title: 'action', label: 'Action', disabled: true, check: true },
];

export const TAG_CANDIDATES = [
  {
    title: 'candidate_id',
    tag: 'ID',
  },
  {
    title: 'full_name',
    tag: 'Name',
  },
  {
    title: 'priority_status',
    tag: 'Primary Status',
  },
  {
    title: 'language',
    tag: 'Language',
  },
  {
    title: 'countryCity',
    tag: 'City',
  },
  {
    title: 'industries',
    tag: 'Industry',
  },
  {
    title: 'yob',
    tag: 'YOB',
  },
  {
    title: 'flow_status',
    tag: 'Activity',
  },
  {
    title: 'current_company_text',
    tag: 'Recent company',
  },
  {
    title: 'current_position_text',
    tag: 'Recent position',
  },
  {
    title: 'industry_years',
    tag: 'Year of services',
  },
  {
    title: 'management_years',
    tag: 'Year of management',
  },
];

export const DATES = [
  { key: '01' },
  { key: '02' },
  { key: '03' },
  { key: '04' },
  { key: '05' },
  { key: '06' },
  { key: '07' },
  { key: '08' },
  { key: '09' },
  { key: '10' },
  { key: '11' },
  { key: '12' },
  { key: '13' },
  { key: '14' },
  { key: '15' },
  { key: '16' },
  { key: '17' },
  { key: '18' },
  { key: '19' },
  { key: '20' },
  { key: '21' },
  { key: '22' },
  { key: '23' },
  { key: '24' },
  { key: '25' },
  { key: '26' },
  { key: '27' },
  { key: '28' },
  { key: '29' },
  { key: '30' },
  { key: '31' },
];

export const MONTHS = [
  {
    key: '01',
    label: 'Jan',
  },
  {
    key: '02',
    label: 'Feb',
  },
  {
    key: '03',
    label: 'Mar',
  },
  {
    key: '04',
    label: 'Apr',
  },
  {
    key: '05',
    label: 'May',
  },
  {
    key: '06',
    label: 'Jun',
  },
  {
    key: '07',
    label: 'Jul',
  },
  {
    key: '08',
    label: 'Aug',
  },
  {
    key: '09',
    label: 'Sep',
  },
  {
    key: '10',
    label: 'Oct',
  },
  {
    key: '11',
    label: 'Nov',
  },
  {
    key: '12',
    label: 'Dec',
  },
];

export const GENDERS = [
  {
    key: 1,
    label: 'Male',
  },
  {
    key: 2,
    label: 'Female',
  },
  {
    key: 3,
    label: 'Complicated',
  },
];

export const MARITAL_STATUS = [
  {
    key: 1,
    label: 'Yes',
  },
  {
    key: -1,
    label: 'No',
  },
];

// relocating_willingness
export const READY_TO_MOVE = [
  {
    key: 1,
    label: 'Yes',
  },
  {
    key: -1,
    label: 'No',
  },
  {
    key: 2,
    label: 'Available',
  },
];
