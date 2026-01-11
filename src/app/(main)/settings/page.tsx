import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: 'Settings | Culinary Canvas',
};

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto">
        <div className="mb-8">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Settings</h1>
            <p className="mt-2 text-lg text-muted-foreground">Manage your account settings.</p>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Under Construction</CardTitle>
                <CardDescription>
                    This page is not yet available. Check back soon!
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>We're working hard to bring you a comprehensive settings page. Thank you for your patience.</p>
            </CardContent>
        </Card>
    </div>
  );
}
