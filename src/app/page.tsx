import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Image from "next/image";

export default async function  Home()  {

  //await db.set('hello', 'hello')

  return <Button variant={'ghost'}>Hello</Button>;
}
