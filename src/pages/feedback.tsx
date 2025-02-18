"use client"

import type React from "react"

import { useState } from "react"
import { AppSidebar } from "../components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeedbackPage() {
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // send feedback to server
    console.log("Feedback submitted:", { email, feedback })
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your feedback!",
    })
    setEmail("")
    setFeedback("")
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <div className="flex-1 space-y-6 p-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Feedback</h2>
          <p className="text-muted-foreground">
            We value your input. Please share your thoughts, suggestions, or report any issues you've encountered.
          </p>
        </div>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Submit Feedback</CardTitle>
            <CardDescription>Your feedback helps us improve our service.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="feedback"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Feedback or Question
                </label>
                <Textarea
                  id="feedback"
                  placeholder="Enter your feedback or question here"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit">Submit Feedback</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

