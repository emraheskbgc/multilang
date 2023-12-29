import ForgotPassword from "@/components/ForgotPassword"
import Login from "../../components/Login"
import SignUp from "@/components/SignUp"


export default async function Home({params:{lang}}) {
  return (
   <div>
      <SignUp lang={lang} />
   </div>
  )
}
