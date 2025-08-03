import LoginForm from "./form";
import LoginLayout from "./loginLayout";
import FormSection from "./subComponet/formSection";
export default function LoginPage() {
  return (
    <LoginLayout>
      <LoginForm>
        <FormSection />
      </LoginForm>
    </LoginLayout>
  );
}
