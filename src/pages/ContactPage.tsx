import { WireframeCard } from "@/components/wireframe/WireframeCard";
import { WireframeCTA } from "@/components/wireframe/WireframeCTA";

const ContactPage = () => (
  <div className="container mx-auto px-4 py-12 max-w-2xl">
    <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Contact</span>
    <h1 className="text-3xl md:text-4xl font-bold mt-2">Get in Touch</h1>
    <p className="text-muted-foreground mt-2">Have questions, suggestions, or want to collaborate? Fill out the form below.</p>

    <WireframeCard className="mt-8 p-6">
      <div className="space-y-6">
        <div>
          <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">Name</label>
          <div className="border-2 border-dashed border-border rounded px-4 py-3 font-mono text-xs text-muted-foreground">Your name...</div>
        </div>
        <div>
          <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">Email</label>
          <div className="border-2 border-dashed border-border rounded px-4 py-3 font-mono text-xs text-muted-foreground">your@email.com</div>
        </div>
        <div>
          <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">Subject</label>
          <div className="border-2 border-dashed border-border rounded px-4 py-3 font-mono text-xs text-muted-foreground">Choose subject...</div>
        </div>
        <div>
          <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">Message</label>
          <div className="border-2 border-dashed border-border rounded px-4 py-3 h-32 font-mono text-xs text-muted-foreground">Write your message...</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-dashed border-border rounded" />
          <span className="text-sm text-muted-foreground">I agree to the privacy policy</span>
        </div>
        <WireframeCTA label="Send Message" to="#" />
      </div>
    </WireframeCard>
  </div>
);

export default ContactPage;
