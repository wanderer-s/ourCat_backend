interface Location {
  country: string
  region: string
  street: string
  zip: string
}

interface User {
  socialType?: string
  socialId?: string
  loginId: string
  password?: string
  mobileNo?: string
  email: string
  gender: string
  nickname: string
  location?: Location
  introduction?: string
  lastAccessedAt: Date
  createdAt: Date
  updatedAt: Date
}


interface FoundUser extends User {
  _id: string
}

interface EditUser {
  nickname?: string | null
  gender?: string | null
  introduction? :string | null
  updatedAt? : Date
}

export {Location, User, FoundUser, EditUser}
