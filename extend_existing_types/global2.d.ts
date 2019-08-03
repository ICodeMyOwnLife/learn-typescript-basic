interface Window {
  readonly ReportingObserver: ReportingObserverConstructor;
}

declare const ReportingObserver: ReportingObserverConstructor;

type ReportingType = "deprecation" | "intervention" | "crash";

interface CrashReportBody {
  readonly reason: "oom" | "unresponsive";
}

interface DeprecationReportBody {
  readonly id: string;
  readonly anticipatedRemoval: Date;
  readonly message: string;
  readonly sourceFile: string | null;
  readonly lineNumber: number | null;
  readonly columnNumber: number | null;
}

interface InterventionReportBody {
  readonly id: string;
  readonly message: string;
  readonly sourceFile: string | null;
  readonly lineNumber: number | null;
  readonly columnNumber: number | null;
}

type Report = {
  readonly url: string;
} & (
  | {
      readonly type: "deprecation";
      readonly body: DeprecationReportBody;
    }
  | {
      readonly type: "intervention";
      readonly body: InterventionReportBody;
    }
  | {
      readonly type: "crash";
      readonly body: CrashReportBody;
    });

interface ReportingObserverOptions {
  readonly types: readonly ReportingType[];
  readonly buffered: boolean;
}

type ReportingObserverCallback = (
  reports: readonly Report[],
  observer: ReportingObserver
) => void;

interface ReportingObserver {
  readonly observe: VoidFunction;
  readonly takeRecords: () => readonly Report[];
  readonly disconnect: VoidFunction;
}

interface ReportingObserverConstructor {
  new (
    callback: ReportingObserverCallback,
    options?: ReportingObserverOptions
  ): ReportingObserver;
}
