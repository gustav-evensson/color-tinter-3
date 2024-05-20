import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FaceIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";


export default function SignupForm() {
  return (
    <Card className="w-full p-5 rounded-md h-fit">
      <h3 className="text-xl font-medium">Sign Up</h3>
      <p className="mb-6 text-muted-foreground text-sm">Sign up to continue</p>
      <div className="flex items-center gap-4">
        <Button variant="outline" className="w-full">
          <GitHubLogoIcon className="size-4 mr-2"/>
          Github
          </Button>
        <Button variant="outline" className="w-full">
          <LinkedInLogoIcon className="size-4 mr-2"/>
          LinkedIn
        </Button>
      </div>
      <Separator className="my-4"/>
      <Label>Email</Label>
      <Input placeholder="E-mail" type="email" className="bg-background mb-3"/>
      <Label>Password</Label>
      <Input placeholder="Password" type="password" className="bg-background"/>
      <Button className="w-full mt-6">Create account</Button>
    </Card>
  )
}