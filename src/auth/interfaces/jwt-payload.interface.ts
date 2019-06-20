export interface JwtPayload {
  userName:string
  email: string;
  passwords:string;
  usertypes:[UserTypeDb];

}

export interface UserTypeDb{
  userTypeName:string
  }