"use client";

import React, { useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Users, Zap } from "lucide-react";
import { Layout } from "@/components/layout";
import Link from "next/link";

export default function Dashboard() {
  const [votingTopics, setVotingTopics] = useState([
    {
      id: 1,
      title: "Energy Price for Q3",
      slug: "energy-price-q3",
      options: ["$0.10/kWh", "$0.12/kWh", "$0.15/kWh"],
      votes: [5, 8, 3],
    },
    {
      id: 2,
      title: "Solar Panel Installation",
      slug: "solar-panel-installation",
      options: ["Yes", "No", "Postpone"],
      votes: [10, 2, 4],
    },
    {
      id: 3,
      title: "Energy Distribution Plan",
      slug: "energy-distribution-plan",
      options: ["Plan A", "Plan B", "Plan C"],
      votes: [6, 7, 3],
    },
  ]);

  const [newTopic, setNewTopic] = useState({
    title: "",
    options: ["", "", ""],
  });

  const handleVote = (topicId: number, optionIndex: number) => {
    setVotingTopics((topics) =>
      topics.map((topic) =>
        topic.id === topicId
          ? {
              ...topic,
              votes: topic.votes.map((v, i) => (i === optionIndex ? v + 1 : v)),
            }
          : topic
      )
    );
  };

  const handleAddTopic = () => {
    if (
      newTopic.title &&
      newTopic.options.every((option) => option.trim() !== "")
    ) {
      setVotingTopics([
        ...votingTopics,
        {
          id: Date.now(),
          ...newTopic,
          votes: [0, 0, 0],
          slug: "",
        },
      ]);
      setNewTopic({ title: "", options: ["", "", ""] });
    }
  };

  const energyData = [
    { name: "Mon", consumption: 240, production: 180 },
    { name: "Tue", consumption: 300, production: 200 },
    { name: "Wed", consumption: 280, production: 250 },
    { name: "Thu", consumption: 320, production: 210 },
    { name: "Fri", consumption: 290, production: 220 },
    { name: "Sat", consumption: 200, production: 260 },
    { name: "Sun", consumption: 180, production: 280 },
  ];

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Energy Community Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Members
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Daily Production
              </CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">457 kWh</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Daily Consumption
              </CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">312 kWh</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="voting" className="space-y-4">
          <TabsList>
            <TabsTrigger value="voting">Community Voting</TabsTrigger>
            <TabsTrigger value="energy">Energy Statistics</TabsTrigger>
          </TabsList>
          <TabsContent value="voting" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Voting Topics</CardTitle>
                <CardDescription>
                  Cast your vote on community decisions
                </CardDescription>
              </CardHeader>
              <CardContent>
                {votingTopics.map((topic) => (
                  <div
                    key={topic.id}
                    className="mb-6 flex justify-between items-center"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {topic.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {topic.options.map((option, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            onClick={() => handleVote(topic.id, index)}
                          >
                            {option} ({topic.votes[index]})
                          </Button>
                        ))}
                      </div>
                    </div>
                    <Link
                      className="bg-black text-white py-2 px-3 rounded-md"
                      href={`/forum/${topic.slug}`}
                    >
                      Go to forum
                    </Link>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Add New Voting Topic</CardTitle>
                <CardDescription>
                  Propose a new topic for community voting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="topic-title">Topic Title</Label>
                    <Input
                      id="topic-title"
                      placeholder="Enter topic title"
                      value={newTopic.title}
                      onChange={(e) =>
                        setNewTopic({ ...newTopic, title: e.target.value })
                      }
                    />
                  </div>
                  {newTopic.options.map((option, index) => (
                    <div key={index} className="space-y-2">
                      <Label htmlFor={`option-${index}`}>
                        Option {index + 1}
                      </Label>
                      <Input
                        id={`option-${index}`}
                        placeholder={`Enter option ${index + 1}`}
                        value={option}
                        onChange={(e) =>
                          setNewTopic({
                            ...newTopic,
                            options: newTopic.options.map((opt, i) =>
                              i === index ? e.target.value : opt
                            ),
                          })
                        }
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleAddTopic}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Topic
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="energy">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Energy Overview</CardTitle>
                <CardDescription>Consumption vs Production</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={energyData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar
                      dataKey="consumption"
                      fill="#8884d8"
                      name="Consumption"
                    />
                    <Bar
                      dataKey="production"
                      fill="#82ca9d"
                      name="Production"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
