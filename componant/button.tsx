"use client";
import { useRouter } from "next/navigation";

import { Button } from "antd";

export default function ButtonLink() {
  const router = useRouter();
  return (
    <div>
      {/* <div className="flex justify-center">*/}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
        <div>
          <Button type="primary" onClick={() => router.push("/Test1")}>
            Test 1 : Auto Delete Todo List
          </Button>
        </div>
        <div>
          <Button type="primary" onClick={() => router.push("/Test2")}>
            Test 2 : Create data from API
          </Button>
        </div>
      </div>
    </div>
    // </div>
  );
}
