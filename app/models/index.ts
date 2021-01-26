export interface TestContent {
  displayMode?: 'normal' | 'blink' | null;
  contentType: 'IMAGE' | 'TEXT';
  data?: string | null;
  fontType?: string;
  fontSize?: string;
}

export interface TestData {
  id: string;
  content: TestContent;
  span?: {
    col?: number;
    row?: number;
  };
}

export interface TestResponse {
  content: Array<Array<TestData>>;
}
