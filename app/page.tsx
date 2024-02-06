"use client";

import { useEffect } from "react";
import ShadowComponent from "./shadowComponent";
import { View } from "reshaped";

export default function IndexPage() {
  useEffect(() => {
    import("./shadowWrapper");
  }, []);

  return (
    <View direction="column" gap={6}>
      <View direction="column" gap={2}>
        My shadow element looks like this:
        <shadow-wrapper />
      </View>
      <View>
        But it should look like this:
        <ShadowComponent />
      </View>
    </View>
  );
}
