const groupBy = <
  T extends {
    [key: string]: string | number;
  }[]
>(
  objects: T,
  keyObj: string
) => {
  return objects.reduce((acc, object) => {
    const groupName = object[keyObj] as string;
    const group = acc[groupName] ?? ([] as []);
    return { ...acc, [groupName]: [...group, object] };
  }, {} as { [key: string]: T });
};

export default groupBy;
