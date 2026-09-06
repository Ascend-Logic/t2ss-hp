export function BrandMark({ small = false }: { small?: boolean }) {
  return <span className={`brand-mark${small ? " sm" : ""}`} aria-hidden="true" />;
}
