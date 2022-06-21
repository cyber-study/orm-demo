import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import CommodityEntity from "./CommodityEntity";


@Entity("pleaceholder")
export default class PleaceholderEntity {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  /** 将广告商品ID作为外键 **/
  @ManyToOne(() => (CommodityEntity), (commodity_record) => (commodity_record.id))
  fx_commodity_id: CommodityEntity | undefined;

  @Column({
    type: "enum",
    nullable: false,
    enum: ["PAGE_TOP", "PAGE_LEFT", "PAGE_RIGHT", "PAGE_BOTTOM", "VIDEO_START", "VIDEO_END"],
    default: "PAGE_TOP"
  })
  position_value: string | undefined;

  @Column({
    type: "enum",
    nullable: false,
    enum: ["VALID", "UNVALID"],
    default: "VALID"
  })
  valid: string | undefined;

  @Column({
    type: "timestamp",
    nullable: false
  })
  create_time: string | undefined;

  @Column({
    type: "timestamp"
  })
  update_time: string | undefined;
};