export interface SignupFormData {
confirmPassword: any;
agreement: any;

  name: string;
  email: string;
  password: string;
}


export interface CommanMember extends Partial<SignupFormData> {
  id: any;
  isAdmin ?: boolean;
  conformPassword?: string;
  image?: File | null;
  gender?: string | null;
  address?: string | null;
  phoneNo?: number | null;
  dob?: Date | null;
  isActive?: boolean;
  addToCard?: any[]; 
  ordered?: any[]; 
}

export interface Product {
  categories: string;
  id: number;
  imageBase64: string;
  productName: string;
  productDescription: string;
  productPrice: number;
}

