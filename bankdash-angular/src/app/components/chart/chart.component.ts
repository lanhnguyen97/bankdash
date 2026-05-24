import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  Chart,
  BarController,
  LineController,
  PieController,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend,
  type ChartConfiguration,
  type Plugin,
} from 'chart.js';

Chart.register(
  BarController,
  LineController,
  PieController,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-chart',
  template: '<canvas #canvas></canvas>',
  styles: [':host { display: block; width: 100%; height: 100%; }'],
})
export class ChartComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() config!: ChartConfiguration;
  @Input() plugins: Plugin[] = [];
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private chart?: Chart;

  ngAfterViewInit() {
    this.render();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['config'] && this.canvas) this.render();
  }
  ngOnDestroy() {
    this.chart?.destroy();
  }
  private render() {
    if (!this.config) return;
    this.chart?.destroy();
    this.chart = new Chart(this.canvas.nativeElement, {
      ...this.config,
      plugins: this.plugins,
    });
  }
}
