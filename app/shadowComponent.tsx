import { Button, View } from "reshaped";

export default function ShadowComponent() {
  return (
    <View direction="column" gap={2}>
      <Button>A shadow element</Button>
      <Button>Another shadow element!</Button>
    </View>
  );
}
