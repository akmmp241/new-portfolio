"use client"

import {Card, CardContent} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"

interface Experience {
  id: string
  title: string
  company: string
  location?: string
  startDate: string
  endDate?: string
  current?: boolean
  description: string
  skills?: string[]
  type?: "work" | "education" | "project" | "intern"
}

interface ExperienceListProps {
  experiences: Experience[]
  className?: string
}

export function ExperienceList({experiences, className = ""}: ExperienceListProps) {
  const formatDateRange = (startDate: string, endDate?: string, current?: boolean) => {
    if (current) {
      return `${startDate} - Present`
    }
    return endDate ? `${startDate} - ${endDate}` : startDate
  }

  return (
      <div className={`w-full ${className}`}>
        {/* Mobile Timeline Layout */}
        <div className="block md:hidden">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-8">
              {experiences.map((experience) => (
                  <div key={experience.id} className="relative">
                    {/* Timeline dot */}
                    <div
                        className="absolute left-4 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-sm"></div>

                    {/* Content card positioned to the right of the line */}
                    <div className="ml-12">
                      <Card className="bg-transparent border-border hover:shadow-md transition-shadow duration-200">
                        <CardContent className="p-6">
                          <div className="space-y-3">
                            <div>
                              <h3 className="font-bold text-lg text-white leading-tight">
                                {experience.title}
                              </h3>
                              <div className="flex flex-col gap-1 mt-1">
                                <p className="font-medium text-primary">{experience.company}</p>
                                {experience.location && (
                                    <p className="text-sm text-white">{experience.location}</p>
                                )}
                              </div>
                            </div>

                            <div className="text-sm text-white font-medium">
                              {formatDateRange(experience.startDate, experience.endDate, experience.current)}
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed">{experience.description}</p>

                            {experience.skills && experience.skills.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-2">
                                  {experience.skills.map((skill, index) => (
                                      <Badge
                                          key={index}
                                          variant="secondary"
                                          className="text-xs bg-secondary/10 text-secondary hover:bg-secondary/20"
                                      >
                                        {skill}
                                      </Badge>
                                  ))}
                                </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Timeline Layout */}
        <div className="hidden md:block">
          <div className="relative max-w-6xl mx-auto">
            {/* Central timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                  <div key={experience.id} className="relative">
                    {/* Timeline dot */}
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-sm z-10"></div>

                    {/* Alternating content positioning */}
                    <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                      <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                        <Card
                            className="bg-transparent border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                          <CardContent className="p-8">
                            <div className="space-y-4">
                              <div>
                                <h3 className="font-bold text-xl text-white leading-tight text-balance">
                                  {experience.title}
                                </h3>
                                <div className="flex flex-col gap-2 mt-2">
                                  <p className="font-sans font-semibold text-primary text-lg">{experience.company}</p>
                                  {experience.location && (
                                      <p className="text-sm text-white">{experience.location}</p>
                                  )}
                                  <div
                                      className="text-sm text-white font-medium border border-muted-foreground px-3 py-1 rounded-md inline-block w-fit">
                                    {formatDateRange(experience.startDate, experience.endDate, experience.current)}
                                  </div>
                                </div>
                              </div>

                              <p className="text-muted-foreground leading-relaxed text-pretty">{experience.description}</p>

                              {experience.skills && experience.skills.length > 0 && (
                                  <div className="flex flex-wrap gap-2 pt-2">
                                    {experience.skills.map((skill, index) => (
                                        <Badge
                                            key={index}
                                            variant="secondary"
                                            className="bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
                                        >
                                          {skill}
                                        </Badge>
                                    ))}
                                  </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}
