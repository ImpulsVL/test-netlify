import { LogoutBtn } from '@/features/auth/logout'
import { CheckUser } from '@/shared/api/user'
import MainPage from './main/MainPage'

export default async function Home() {
  const user = await CheckUser()

  if (user?.id) {
    return (
      <div>
        qwe
        <LogoutBtn />
      </div>
    )
  }

  return <div><MainPage /></div>
}
