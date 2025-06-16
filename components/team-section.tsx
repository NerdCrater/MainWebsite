import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import SocialIcons from "./social-icons"
import ProfileSocialIcons from "./profile-social-icons"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Krati Saxena",
      title: "CEO & Founder",
      bio: "With over 3 years of experience in tech, Krati leads our vision and strategy.",
      image: "/krati-profile.jpg",
      
        linkedin:"https://www.linkedin.com/in/kratisaxena29/",
      instagram:"",
      facebook:"",
      twitter:"",
      github:"https://github.com/Kratisaxena29"

    },
    {
      name: "Prabhjot Singh",
      title: "CTO",
      bio: "Prabhjot oversees our technical direction and ensures we stay at the cutting edge.",
      image: "/prabhjot-profile.jpg",
      linkedin:"https://www.linkedin.com/in/dev-prabhjot/",
      instagram:"",
      facebook:"",
      twitter:"",
      github:"https://github.com/prabhjotsingh2011"

    },
    {
      name: "Michael Rodriguez",
      title: "Lead Developer",
      bio: "Michael brings 10+ years of development expertise to our most complex projects.",
      image: "/placeholder.svg?height=400&width=400",
        linkedin:"",
      instagram:"",
      facebook:"",
      twitter:"",
      github:""

    },
    
    {
      name: "Emily Patel",
      title: "Design Director",
      bio: "Emily leads our design team with a focus on creating exceptional user experiences.",
      image: "/placeholder.svg?height=400&width=400",
        linkedin:"",
      instagram:"",
      facebook:"",
      twitter:"",
      github:""

    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {teamMembers.map((member, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="relative h-64">
            <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
          </div>
          <CardContent className="p-6 text-center">
            <h3 className="font-bold text-xl mb-1">{member.name}</h3>
            <p className="text-primary mb-2">{member.title}</p>
            <p className="text-muted-foreground mb-4">{member.bio}</p>
            <ProfileSocialIcons 
              linkedin={member?.linkedin}
              instagram={member?.instagram}
              twitter={member?.twitter}
              facebook={member?.facebook}
              github={member?.github}

            />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
