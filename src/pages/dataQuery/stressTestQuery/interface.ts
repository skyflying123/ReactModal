export interface StressColumn {
  id: string;
  column: string;
  value: string;
}
export interface MemberStressColumn {
  id: string;
  code: string;
  openValue: string;
  vaR: string;
  scene: string;
}
export interface StressTestColumn {
  id: string;
  scene: string;
  risk: string;
  riskProportion: string;
  maxMember: string;
  difference: string;
  differenceProportion: string;
  lowMember: string;
}
