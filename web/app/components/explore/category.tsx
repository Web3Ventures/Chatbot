"use client";
import type { FC } from "react";
import React from "react";
import { useTranslation } from "react-i18next";
import cn from "@/utils/classnames";
import exploreI18n from "@/i18n/en-US/explore";
import type { AppCategory } from "@/models/explore";
import { ThumbsUp } from "@/app/components/base/icons/src/vender/line/alertsAndFeedback";
import { motion } from "framer-motion";

const categoryI18n = exploreI18n.category;

export type ICategoryProps = {
  className?: string;
  list: AppCategory[];
  value: string;
  onChange: (value: AppCategory | string) => void;
  /**
   * default value for searchparam 'category' in en
   */
  allCategoriesEn: string;
};

const Category: FC<ICategoryProps> = ({
  className,
  list,
  value,
  onChange,
  allCategoriesEn,
}) => {
  const { t } = useTranslation();
  const isAllCategories = !list.includes(value as AppCategory);

  const itemClassName = (isSelected: boolean) =>
    cn(
      "flex relative items-center px-3 py-[7px] h-[32px] rounded-lg border-[0.5px] border-transparent text-gray-700 font-medium leading-[18px] cursor-pointer hover:bg-gray-200",
      isSelected && " text-primary-600 "
    );

  return (
    <div className={cn(className, "flex space-x-1 text-[13px] flex-wrap")}>
      <div
        className={cn(
          "flex relative items-center px-3 py-[7px] h-[32px] bg-transparent rounded-lg border-[0.5px] border-transparent text-gray-700 font-medium leading-[18px] cursor-pointer hover:bg-gray-200",
          value === "Recommended" && " text-primary-600 "
        )}
        onClick={() => onChange(allCategoriesEn)}
      >
        <ThumbsUp className="mr-1 w-3.5 h-3.5 relative z-20" />
        <span className="relative z-20">{t("explore.apps.allCategories")}</span>
        {value === "Recommended" && (
          <motion.div
            layoutId="explore-app-blob"
            className="absolute inset-0 z-10 bg-white rounded-lg shadow-xs border-gray-200"
          ></motion.div>
        )}
      </div>
      {list.map((name) => (
        <div
          key={name}
          className={itemClassName(name === value)}
          onClick={() => onChange(name)}
        >
          <span className="relative z-20">
            {categoryI18n[name] ? t(`explore.category.${name}`) : name}
          </span>
          {value === name && (
            <motion.div
              layoutId="explore-app-blob"
              className="absolute inset-0 z-10 bg-white rounded-lg shadow-xs border-gray-200"
            ></motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Category);
