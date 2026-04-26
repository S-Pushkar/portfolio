import type { IconType } from "react-icons";
import { FaMicrosoft } from "react-icons/fa6";
import {
  SiApachekafka,
  SiDocker,
  SiFastapi,
  SiGo,
  SiGrafana,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPrometheus,
  SiSpringboot,
} from "react-icons/si";

export const projectTechIconMap: Record<string, IconType> = {
  "Spring Boot": SiSpringboot,
  "Fast API": SiFastapi,
  Docker: SiDocker,
  Kafka: SiApachekafka,
  Azure: FaMicrosoft,
  "Mongo DB": SiMongodb,
  Grafana: SiGrafana,
  Prometheus: SiPrometheus,
  Go: SiGo,
  MySQL: SiMysql,
  "Next JS": SiNextdotjs,
};
