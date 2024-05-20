import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function EmailList() {
  return (
    <Card className="w-full p-5 rounded-md h-fit">
      <h3 className="text-xl font-medium">Email list</h3>
      <p className="mb-6 text-muted-foreground text-sm">Enter your email to subscribe to our email list</p>
      <div className="flex items-center gap-3">
        <Input placeholder="E-mail" className="bg-background" />
        <Button>Subscribe</Button>
      </div>
    </Card>
  );
}
