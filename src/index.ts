export async function stackSize(): Promise<number> {
  return await stackSizeSync();
}

export function stackSizeSync (): number {
  try {
    return 1 + stackSizeSync();
  } catch (e) {
    return 1;
  }
}

export default stackSize;