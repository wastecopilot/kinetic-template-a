import Image from "next/image";

type LogoProps = {
  /** "on-white": navy-text logo on solid white. "on-black": white-text logo on solid black. */
  background: "on-white" | "on-black";
  className?: string;
  priority?: boolean;
};

/**
 * New Kinetic Authorized Agent logo. Always rendered on its own solid
 * white or solid black plate, as the brand rules require.
 */
export function Logo({ background, className = "", priority }: LogoProps) {
  const onBlack = background === "on-black";
  return (
    <span className={`inline-flex items-center ${onBlack ? "bg-black" : "bg-white"} p-2 ${className}`}>
      <Image
        src={onBlack ? "/logos/kinetic-authorized-agent-white-text.png" : "/logos/kinetic-authorized-agent-navy-text.png"}
        alt="Kinetic Authorized Agent"
        width={1074}
        height={336}
        priority={priority}
        className="h-9 w-auto sm:h-10"
      />
    </span>
  );
}
