const groupBy = <
  T extends {
    [key: string]: string | number;
    id: number;
    title: string;
  }[]
>(
  objects: T,
  key: string
) => {
  return objects.reduce((acc, object) => {
    const groupName = object[key];
    const group = acc[groupName] ?? ([] as []);
    return { ...acc, [groupName]: [...group, object] };
  }, {} as { [key: string]: T });
};

export default groupBy;
