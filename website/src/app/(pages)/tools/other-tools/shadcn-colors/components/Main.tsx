
import EmailList from "./displayComponents/emailList";
import SignupForm from "./displayComponents/signupForm";
import { NotificationCard } from "./displayComponents/notificationCard";
import VariableColorPicker from "./variableColorPicker";

export default function ShadcnMain() {
  return (
    <main className="w-full mt-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" id="componentDisplay">
        <div className="flex flex-col gap-4">
          <EmailList />
          <SignupForm />
        </div>
        <div className="flex flex-col gap-4">
          <NotificationCard />
        </div>
        <div className="flex flex-col gap-4">
          <EmailList />
          <SignupForm />
        </div>
      </div>
    </main>
  );
}
