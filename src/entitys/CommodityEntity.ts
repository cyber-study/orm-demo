import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity("commodity_record")
export default class CommodityEntity {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({
    type: "varchar",
    nullable: false,
    length: 36
  })
  commodity_id: string | undefined;

  /** 投放类型默认为天 **/
  @Column({
    type: "enum",
    nullable: false,
    enum: ["YEAR", "MONTH", "DAY", "AMOUNT"],
    default: "DAY"
  })
  calculate_type: string | undefined;

  /** 投放周期的数值 **/
  @Column({
    type: "int",
    nullable: false,
    default: 1
  })
  calculate_value: number | undefined;

  /** 投放周期计算后的日期 **/
  @Column({
    type: "timestamp"
  })
  calculate_computed_date: string | undefined;

  /** 投放在网站的具体的主题详情页 **/
  @Column({
    type: "varchar",
    nullable: false,
    length: 200
  })
  subject_detail_page: string | undefined;

  /** 广告类型默认为图片IMAGE **/
  @Column({
    type: "enum",
    nullable: false,
    enum: ["VIDEO", "IMAGE", "HTML5"],
    default: "IMAGE"
  })
  content_type: string | undefined;

  /** 广告资源类型 **/
  @Column({
    type: "enum",
    nullable: false,
    enum: ["OSS_URL", "CUSTOM_URL"],
    default: "OSS_URL"
  })
  resource_type: string | undefined;

  /** 广告资源的URL链接 **/
  @Column({
    type: "varchar",
    length: 200
  })
  resource_link: string | undefined;

  /** 广告资源的标题 **/
  @Column({
    type: "varchar",
    length: 36
  })
  title: string | undefined;

  /** 广告资源的详情 **/
  @Column({
    type: "varchar",
    length: 200
  })
  discription: string | undefined;

  /** 广告资源跳转的URL **/
  @Column({
    type: "varchar",
    length: 200
  })
  link_url: string | undefined;

  @Column({
    type: "enum",
    nullable: false,
    enum: ["VALID", "UNVALID"],
    default: "VALID"
  })
  valid: string | undefined;

  @Column({
    type: "enum",
    nullable: false,
    enum: ["COMPLATE", "PEDDING", "FAILD"],
    default: "PEDDING"
  })
  status: string | undefined;

  @Column({
    type: "timestamp",
    nullable: false
  })
  create_time: string | undefined;

  @Column({
    type: "timestamp",
    nullable: false
  })
  complate_time: string | undefined;

  @Column({
    type: "timestamp"
  })
  update_time: string | undefined;

  @Column({
    type: "varchar",
    nullable: false,
    length: 80
  })
  user_id: string | undefined;
};