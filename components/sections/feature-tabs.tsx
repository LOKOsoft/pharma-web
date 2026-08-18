"use client";

import type { ReactNode } from "react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function FeatureTabs({ doctor, patient }: { doctor: ReactNode; patient: ReactNode }) {
  return (
    <Tabs defaultValue="doctor" className="flex flex-col items-center">
      <TabsList>
        <TabsTrigger value="doctor">For Doctor</TabsTrigger>
        <TabsTrigger value="patient">For Patients</TabsTrigger>
      </TabsList>

      <TabsContent value="doctor" className="w-full">
        {doctor}
      </TabsContent>
      <TabsContent value="patient" className="w-full">
        {patient}
      </TabsContent>
    </Tabs>
  );
}
